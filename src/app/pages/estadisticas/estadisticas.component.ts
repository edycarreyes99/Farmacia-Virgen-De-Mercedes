import {Component, OnInit} from '@angular/core';

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

  displayedColumns: string[] = ['Producto', 'Cantidad', 'Valor'];
  transactions: Transaction[] = [
    {Producto: 'Beach ball', Cantidad: 4, Valor: 4},
    {Producto: 'Towel', Cantidad: 5, Valor: 5},
    {Producto: 'Frisbee', Cantidad: 2, Valor: 2},
    {Producto: 'Sunscreen', Cantidad: 4, Valor: 4},
    {Producto: 'Cooler', Cantidad: 25, Valor: 25},
    {Producto: 'Swim suit', Cantidad: 15, Valor: 15},
  ];

  /** Gets the total Valor of all transactions. */
  getTotalValor() {
    return this.transactions.map(t => t.Valor).reduce((acc, value) => acc + value, 0);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
