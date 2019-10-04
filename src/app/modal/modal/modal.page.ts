import { Component, OnInit } from '@angular/core';
import { NavParams, LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CloudServiceService } from 'src/app/services/cloud-service.service';

import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { MapaPage } from '../mapa/mapa.page';

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
  constructor(
    public modalCon: ModalController,
    public cloud:  CloudServiceService,
    private router: Router,
    public loadingContr: LoadingController,
    private navPar: NavParams,
    public modalCont: ModalController
    
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

    

}
