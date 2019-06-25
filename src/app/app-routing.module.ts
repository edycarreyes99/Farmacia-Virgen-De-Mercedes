import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importaciones de los components
import {LoginComponent} from './pages/login/login.component';
import {EstadisticasComponent} from './pages/estadisticas/estadisticas.component';
import {InventarioComponent} from './pages/inventario/inventario.component';


const routes: Routes = [
  {path: '', component: InventarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
