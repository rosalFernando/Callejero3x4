import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BackbuttonService {

  exitB: any;
  currentURL: any = "";
  haspressB: boolean = false;
  openModal=false;
  

  constructor(private platform: Platform,
    private navCtrl: NavController,
    private router: Router) { 
      this.exitB = this.platform.backButton;
      this.exitB.subscribe(()=>{
        if(!this.openModal){
          if (this.currentURL == "/" || this.currentURL == "" || this.currentURL == "/home"  )
          /*En caso de estar en la pestaña home si se pulsa atrás se cierra la aplicación*/
          navigator['app'].exitApp();

        }else{
          this.haspressB=true;
        }
      });

      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {  //es lanzado cuando se termina de navegar
          this.currentURL = event.url;
          if (this.haspressB) {  //Si se pulsó atrás
            if(this.currentURL=="/modal"){
              this.navCtrl.navigateRoot(['/listas'], { animationDirection: "back" });
              if(this.currentURL=="/listas"){
                this.navCtrl.navigateRoot(['/mapaPrincipal'], { animationDirection: "back" });
  
              }
              if(this.navCtrl.navigateRoot(['/mapaPrincipal'])){
                navigator['app'].exitApp();
  
              }
            }else{
              this.navCtrl.navigateRoot(['/'], { animationDirection: "back" });
            }
           
          }
        }
      });
    }
}
