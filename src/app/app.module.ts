import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';


import {NgModule} from '@angular/core';

// se realizan las importaciones de firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';

// importacion de las variables de desarrollo
import {environment} from '../environments/environment';

// importacion del modulo de material design
import {MaterialModule} from './modules/material/material.module';

// importacion del modulo de ng-bootstrap
import {NgBootstrapModule} from './modules/ng-bootstrap/ng-bootstrap.module';

// importacion del modulo de routing
import {AppRoutingModule} from './app-routing.module';

// importacion de los services
import {ServicioService} from './services/servicio.service';


// importacion de components
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {NavsideComponent} from './components/navside/navside.component';
import {EstadisticasComponent} from './pages/estadisticas/estadisticas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InventarioComponent } from './pages/inventario/inventario.component';

@NgModule({
  declarations: [
    // importacion de components
    AppComponent,
    LoginComponent,
    NavsideComponent,
    EstadisticasComponent,
    NavbarComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // modules de la base de datos
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence({synchronizeTabs: true}),
    AngularFireDatabaseModule,
    AngularFireStorageModule,

    // modulo de material design
    MaterialModule,

    // modulo de ng-bootstrap
    NgBootstrapModule
  ],
  // se injectan los proveedores de codigo para otros components en el apartado "providers"
  providers: [
    ServicioService,
    NavsideComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
