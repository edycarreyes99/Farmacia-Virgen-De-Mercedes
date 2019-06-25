import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() titulo: string = null;

  // variable que contendra el string de la fecha y hora
  fechaHora = '';

  // variable que contendra todos los meses
  // tslint:disable-next-line:max-line-length
  meses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // variable que contendra todos los dias de la semana
  diasSemana: string[] = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  constructor() {
    // en el momento que el componente se construye se manda a llamar a la funcion para extraer la fecha y la hora
    this.extraerFechaHora();
  }

  ngOnInit() {
  }

  // funcion para extraer la fecha y la hora a cada segundo
  extraerFechaHora() {
    setInterval(() => {
      const fechaHora = new Date();
      if ((fechaHora.getHours() >= 0) && (fechaHora.getHours() <= 12)) {
        // tslint:disable-next-line:max-line-length
        this.fechaHora = `${this.diasSemana[fechaHora.getDay()]} ${fechaHora.getDate()} de ${this.meses[fechaHora.getMonth()]} del ${fechaHora.getFullYear()} | ${fechaHora.getHours()}:${fechaHora.getMinutes()}:${fechaHora.getSeconds()} AM`;
      } else if (fechaHora.getHours() > 12) {
        // tslint:disable-next-line:max-line-length
        this.fechaHora = `${this.diasSemana[fechaHora.getDay()]} ${fechaHora.getDate()} de ${this.meses[fechaHora.getMonth()]} del ${fechaHora.getFullYear()} | ${fechaHora.getHours() - 12}:${fechaHora.getMinutes()}:${fechaHora.getSeconds()} PM`;
      }
    }, 1000);
  }
}
