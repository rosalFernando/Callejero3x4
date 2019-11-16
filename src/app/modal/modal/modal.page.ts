import { Component, OnInit } from '@angular/core';
import { NavParams, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { CloudServiceService } from 'src/app/services/cloud-service.service';

import { MapaPage } from '../mapa/mapa.page';
import { Map } from 'leaflet';
import { AuthService } from 'src/app/services/auth.service';
import { CrudComentarioPage } from '../crud-comentario/crud-comentario.page';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  myloading: any;
  nombre: any;
  listado = [];
  listadoPanel = [];
  key:any;
  tipo:any;
  origen:any;
  horario=[];
  director:any;
  map:Map;
  agrupList=[];
  lat:any;
  long:any;
  usuario:any;
  listaComentarios: any[];
  listaComentariosPane: any[];
 
  constructor(
    public modalCon: ModalController,
    public cloud:  CloudServiceService,
    private router: Router,
    public loadingContr: LoadingController,
    private navPar: NavParams,
    public modalCont: ModalController,
    public as: AuthService,
    
  
   
    
  ) { 
    //comprobar en oninit
   
    
  }

  ngOnInit() {
    this.nombre=this.navPar.get('nombre');
    this.key=this.navPar.get('key');
    this.origen=this.navPar.get('origen');
    this.tipo=this.navPar.get('tipo');
    this.director=this.navPar.get('director');
    this.horario=this.navPar.get('horario');
   this.usuario=this.as.userDetails().email;


   this.cloud.getComentarioAgrupacion(this.nombre)
   .then((doc)=>{
     this.listaComentarios=[];
     doc.forEach((comen)=>{
       this.listaComentarios.push({id:comen.id, ...comen.data()})
     });
     this.listaComentariosPane=this.listaComentarios
    })
  }

  async presentLoading() {
    this.myloading = await this.loadingContr.create({
      message: 'Espere...'
    });
    return await this.myloading.present();

  }




  cerrar(){
    this.modalCon.dismiss();
    
      }


      async mostrarUbi(ubicacionnombre,ubicacionpos){
        const modal=await this.modalCont.create({
    component: MapaPage,
    cssClass: 'mapa',
    componentProps:{
     ubicacionnombre:ubicacionnombre,
     ubicacionpos:ubicacionpos
   
    
    },
        });
     return await modal.present();
      }
      
    async comentario(){
      let modal= await this.modalCont.create({
        component:CrudComentarioPage,
        componentProps:{
          usuario:this.usuario,
          nombre:this.nombre
        }
      })
      return modal.present();
     }
     doRefresh(event){
      this.cloud.getComentarioAgrupacion(this.nombre)
   .then((doc)=>{
     this.listaComentarios=[];
     doc.forEach((comen)=>{
       this.listaComentarios.push({id:comen.id, ...comen.data()})
     });
     this.listaComentariosPane=this.listaComentarios
    });
    event.target.complete();
    }

  

}
