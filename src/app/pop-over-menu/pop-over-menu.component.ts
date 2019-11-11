import { Component, OnInit } from '@angular/core';
import { Events, NavParams, PopoverController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { MisComentariosPage } from '../modal/mis-comentarios/mis-comentarios.page';
import { CloudServiceService } from '../services/cloud-service.service';

@Component({
  selector: 'app-pop-over-menu',
  templateUrl: './pop-over-menu.component.html',
  styleUrls: ['./pop-over-menu.component.scss']
})
export class PopOverMenuComponent implements OnInit {
  page: any;
  listaComentarios=[]
  listaComentariosPane: any;

  constructor(private events: Events,
    private navParams: NavParams,
    private popoverController: PopoverController,
    private auth: AuthService,
    private router: Router,
    private modaCont: ModalController,
    private cloud: CloudServiceService,
    private toast:ToastController, ) { }

  ngOnInit() {
    //Get data from popover page
   // this.page = this.navParams.get('data');
  
  }

  

  logout() {
  // code for logout
  this.auth.logoutUser();
  this.popoverController.dismiss();
  this.router.navigate(['autenticacion']);
 
  
  }
  /*
  crear componente modal.
  */
   irMiscomentarios(){
     this.popoverController.dismiss();
   this.router.navigate(['mis-comentarios']);
   
  }

  

  

}
