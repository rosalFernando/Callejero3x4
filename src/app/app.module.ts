import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ModalPage } from './modal/modal/modal.page';
import {MapaPage} from './modal/mapa/mapa.page';
import {AuthService} from './services/auth.service';
import {AngularFireAuthModule} from '@angular/fire/auth';
import * as firebase from 'firebase';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudComentarioPage } from './modal/crud-comentario/crud-comentario.page';








firebase.initializeApp(environment.firebaseConfig);






@NgModule({
  declarations: [AppComponent, ModalPage,MapaPage,CrudComentarioPage],
  entryComponents: [ModalPage,MapaPage,CrudComentarioPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    
  
    
  
  
    ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
   
    
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
