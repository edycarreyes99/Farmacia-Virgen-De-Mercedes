import {Component, OnInit, ViewChild} from '@angular/core';

// se realiza la importacion del modulo de chart.js
import {Chart} from 'chart.js';


export interface Transaction {
  Producto: string;
  Cantidad: number;
  Valor: number;
}

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {

  // se declaran las variables de tipo document observable para los graficos de las ventas
  @ViewChild('graficoVentasSemanaCanvas') graficoVentasSemanaCanvas;
  @ViewChild('graficoVentasAnualCanvas') graficoVentasAnualCanvas;

  // se declaran las variables de tipo any que contendran los datos de los graficos
  graficoVentasSemanaChart: any;
  graficoVentasAnualChart: any;

  // se declara la variable de tipo arreglo para las columnas que contendran las tablas
  displayedColumns: string[] = ['Producto', 'Cantidad', 'Valor'];

  // variable que contendra todos los meses
  // tslint:disable-next-line:max-line-length
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // variable que contendra todos los dias de la semana
  diasSemana: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  // se declara un arreglo del tipo Transaction con los valores que se rellenara la tabla
  transactions: Transaction[] = [
    {Producto: 'Beach ball', Cantidad: 4, Valor: 4},
    {Producto: 'Towel', Cantidad: 5, Valor: 5},
    {Producto: 'Frisbee', Cantidad: 2, Valor: 2},
    {Producto: 'Sunscreen', Cantidad: 4, Valor: 4},
    {Producto: 'Cooler', Cantidad: 25, Valor: 25},
    {Producto: 'Swim suit', Cantidad: 15, Valor: 15},
  ];

  // se declara una funcion para retornar la el total de la suma de cada una de los transaction
  getTotalValor() {
    return this.transactions.map(t => t.Valor).reduce((acc, value) => acc + value, 0);
  }

  constructor() {
  }

  ngOnInit() {
    // se manda a llamar a la funcion que construye el grafico de las ventas de la semana
    this.generarGraficoVentasSemana();
    // se manda a llamar a la funcion que construye el grafico de las ventas del año
    this.generarGraficoVentasAnual();
  }

  // funcion para generar los datos del grafico de la venta semanal
  generarGraficoVentasSemana() {
    this.graficoVentasSemanaChart = new Chart(this.graficoVentasSemanaCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.diasSemana,
        datasets: [
          {
            label: 'Ventas',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'],
            borderWidth: 1
          }
        ]
      },
      options: {scales: {yAxes: [{ticks: {beginAtZero: true}}]}}
    });
  }

  // funcion para generar los datos del grafico de la venta anual
  generarGraficoVentasAnual() {
    this.graficoVentasAnualChart = new Chart(this.graficoVentasAnualCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.meses,
        datasets: [{
          label: 'Ventas',
          data: [65, 59, 80, 81, 56, 55, 40, 78, 47, 21, 120, 54],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          lineTension: 0.1
        }]
      },
      options: {}
    });
  }

}
