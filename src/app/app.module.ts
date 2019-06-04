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










@NgModule({
  declarations: [AppComponent, ModalPage,MapaPage],
  entryComponents: [ModalPage,MapaPage,],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
  
    AngularFirestoreModule,
  
    
  
  
    ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestore,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
