import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importaciones de los componentes
import {LoginComponent} from './pages/login/login.component';
import {EstadisticasComponent} from './pages/estadisticas/estadisticas.component';


const routes: Routes = [
  {path: '', component: EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
