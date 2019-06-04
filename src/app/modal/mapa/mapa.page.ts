import { Component, OnInit, ViewChild, ElementRef, NgModule } from '@angular/core';

import { NavController, ModalController, NavParams, LoadingController } from '@ionic/angular';

import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { CloudServiceService } from '../../services/cloud-service.service';
import { _document } from '@angular/platform-browser/src/browser';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})


export class MapaPage {

  @ViewChild('map2') mapContainer: ElementRef;
  map:Map;
  ubicacionpos=[];
  ubicacionnombre:any;
  lat:any;
  long:any;
  icon:any;
  
  listaPos=[];
 

  constructor(public navCtrl: NavController,
    private router: Router,
    private cloud: CloudServiceService,
    public modalCon: ModalController,
    private navPar: NavParams,
    private loading:LoadingController) { 


      this.ubicacionnombre=this.navPar.get('ubicacionnombre');
      this.ubicacionpos=this.navPar.get('ubicacionpos');
      this.lat=this.navPar.get('ubicacionpos')._lat;
      this.long=this.navPar.get('ubicacionpos')._long;

      console.log(this.lat);
    }

    async presentLoading(msg){
      let myloading=await this.loading.create({
        message:msg
      });
      return await myloading.present();
    }

  ionViewDidEnter() {
    this.presentLoading("Cargando mapa");
    setTimeout(()=>{
      this.loadmap();
      this.loading.dismiss();
    },1000);
    
  }

  

  

  /**
   * Metodo que carga un mapa con unas coordenadas predifinidas.
   */
 
  loadmap() {
    console.log("Cargando mapa...")
    this.icon=L.icon({
      iconUrl: '../../../assets/img/plumas.png',

iconSize: [38, 60], // size of the icon
shadowSize: [50, 64], // size of the shadow
iconAnchor: [22, 94], // point of the icon which will correspond to marker's 
shadowAnchor: [4, 62],  // the same for the shadow
popupAnchor: [-3, -76] // point from which the popup should open relative..
    });
      
    this.map = new Map("map2",{center:[this.lat,this.long]}).setView([ this.lat,this.long],
      14);
    
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      
      maxZoom: 18,
      minZoom:10,
      
     
      
    }).addTo(this.map);

    

    marker([this.lat,this.long],{icon:this.icon}).addTo(this.map)
   
    
          .bindPopup(this.ubicacionnombre)
          .openPopup();




        

  }


  
  ionViewWillLeave() {
    this.map.remove();
  }

  cerrar(){
    this.modalCon.dismiss();
  }

}
