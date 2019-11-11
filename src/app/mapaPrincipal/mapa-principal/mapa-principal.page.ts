import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { NavController, LoadingController, ModalController } from '@ionic/angular';

import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { CloudServiceService } from '../../services/cloud-service.service';
import { MapaPage } from 'src/app/modal/mapa/mapa.page';


@Component({
  selector: 'app-mapa-principal',
  templateUrl: './mapa-principal.page.html',
  styleUrls: ['./mapa-principal.page.scss'],
})
export class MapaPrincipalPage {
  @ViewChild('map') mapContainer: ElementRef;
  map:Map;
  agrupList=[];
  agrupUbi=[];
  icon:any;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private cloud: CloudServiceService,
    private loading:LoadingController,
    private modalCont: ModalController
  ) { }

 /**
   * Metodo que se implementa al iniciar la ventana.
   * Dentro llama al metodo loadmap().
   */
 
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
    this.icon=L.icon({
      iconUrl: '../../../assets/img/plumas.png',

iconSize: [38, 60], // size of the icon
shadowSize: [50, 64], // size of the shadow
iconAnchor: [22, 94], // point of the icon which will correspond to marker's 
shadowAnchor: [4, 62],  // the same for the shadow
popupAnchor: [-3, -76] // point from which the popup should open relative..
    });
    
    this.map = new Map("map",{center:[37.8915500,-4.7727500]}).setView([ 37.8915500,-4.7727500],
      14);
    
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom:10
      
    }).addTo(this.map);

 
  
this.cloud.getUbicaciones()
.then((datos)=>{
this.agrupUbi=[];
datos.forEach((doc)=>{

this.agrupUbi.push({id:doc.id, ...doc.data()});
marker([doc.data().pos._lat, doc.data().pos._long],{icon:this.icon}).addTo(this.map)
          .bindPopup(doc.data().nombre)
          .openPopup();
          
         

});

})

   

 

  
    
  }

  
  ionViewWillLeave() {
    this.map.remove();
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
  
  irListas(){
    this.router.navigate(['listas']);
  }

}
