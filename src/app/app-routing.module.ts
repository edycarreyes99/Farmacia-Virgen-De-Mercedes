import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// importaciones de los componentes
import {LoginComponent} from './pages/login/login.component';


const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
