import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgModule} from '@angular/core';

// se realizan las importaciones de firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';

// importacion de las variables de desarrollo
import {environment} from '../environments/environment';

// importacion del modulo de material design
import {MaterialModule} from './modulos/material/material.module';

// importacion del modulo de ng-bootstrap
import {NgBootstrapModule} from './modulos/ng-bootstrap/ng-bootstrap.module';

// importacion del modulo de routing
import {AppRoutingModule} from './app-routing.module';

// importacion de componentes
import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';

@NgModule({
  declarations: [
    // importacion de componentes
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // modulos de la base de datos
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence({synchronizeTabs: true}),
    AngularFireDatabaseModule,
    AngularFireStorageModule,

    // modulo de material design
    MaterialModule,

    // modulo de ng-bootstrap
    NgBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
