import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ModalController, ActionSheetController, ToastController, IonInfiniteScroll } from '@ionic/angular';
import {ActivatedRoute, Router } from '@angular/router';
import { CloudServiceService } from '../services/cloud-service.service';
import { ModalPage } from '../modal/modal/modal.page';
import { DocumentReference } from 'angularfire2/firestore';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})
export class ListasPage implements OnInit {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: IonSlides;
  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;
  @ViewChild('dynamicList') dynamicList;

   // Slides
 SwipedTabsIndicator: any = null;
 tabs = ["selectTab(0)", "selectTab(1)","selectTab(2)","selectTab(3)"];
 public category: any = "0";
 ntabs=4;
 listaAgrupCom=[];
  listaAgrupComPanel=[];
  listaAgrupChi=[];
  listaAgrupChiPanel=[];
  listaAgrupCoro=[];
  listaAgrupCoroPanel=[];
  listaAgrupCuar=[];
  listaAgrupCuarPanel=[];
  private ncontador:number=0;

  constructor(  public loadingController: LoadingController,
    private router: Router,
    public modalCont: ModalController,
    public actionSheetController: ActionSheetController,
    private cloud: CloudServiceService,
    private toast:ToastController) { }
    

    async presentToast(msg) {
      const toast = await this.toast.create({
        message: msg,
        duration: 5000
      });
      toast.present();
    }

  errorCargando(){
    console.log(this.ncontador);
    if(this.ncontador<4){
      this.loadingController.dismiss();
      this.presentToast("Error cargando información");
    }
  }
  ngOnInit() {
    
    this.category = "0";
    this.SwipedTabsSlider.length().then(l => {  //no sería necesario aquí, solo en ngOnInit
      this.ntabs = l;
    });
  }
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }

  ionViewWillEnter(){
    this.ncontador=0;
    setTimeout(()=>{
      this.errorCargando();
    },20000);
    this.presentLoading('Cargando...');
    this.cloud.getAgrupsComparsa()
    .then((miCom)=>{
      this.listaAgrupCom=[];
      this.delete();
      miCom.forEach((doc)=>{
        let misdatos=doc.data();
        let misdatosformateados={}
        misdatosformateados['director']=misdatos.director; //copio todos los datos normales
        misdatosformateados['nombre']=misdatos.nombre;
        misdatosformateados['tipo']=misdatos.tipo;
        misdatosformateados['origen']=misdatos.origen;
        misdatosformateados['horario']=[];
        let i=0;
        let ultimahora="";
        let todasMisPromesas:Promise<any>[]=[]; 
        
        misdatos.horario.forEach((actuacion)=>{
          //console.log(actuacion);
          if(i%2!=0){
            let referencia:DocumentReference = actuacion;
            todasMisPromesas.push(this.cargaubi(actuacion,ultimahora));
          }else{
            ultimahora=actuacion;
          }
          i++;
        });
        Promise.all(todasMisPromesas).then(values=>{
          misdatosformateados['horario']=values; 
        }).then(()=>{
          
          this.listaAgrupCom.push({id: doc.id, ...misdatosformateados});
        });
        this.ncontador++;

        
       // console.log(doc.data());
      });
      this.listaAgrupComPanel=this.listaAgrupCom;
      console.log(this.listaAgrupComPanel);
      
      if(this.ncontador==4)
        this.loadingController.dismiss();

    });

    this.cloud.getAgrupsChirigota()
      .then((miChiri)=>{
        this.listaAgrupChi=[];
        this.delete();
        miChiri.forEach((doc)=>{
          let misdatos=doc.data();
          let misdatosformateados={}
          misdatosformateados['director']=misdatos.director; //copio todos los datos normales
          misdatosformateados['nombre']=misdatos.nombre;
          misdatosformateados['tipo']=misdatos.tipo;
          misdatosformateados['origen']=misdatos.origen;
          misdatosformateados['horario']=[];
          let i=0;
          let ultimahora="";
          let todasMisPromesas:Promise<any>[]=[]; 

          misdatos.horario.forEach((actuacion)=>{
            //console.log(actuacion);
            if(i%2!=0){
              let referencia:DocumentReference = actuacion;
              todasMisPromesas.push(this.cargaubi(actuacion,ultimahora));
            }else{
              ultimahora=actuacion;
            }
            i++;
          });
          Promise.all(todasMisPromesas).then(values=>{
            misdatosformateados['horario']=values; 
          }).then(()=>{
           
            this.listaAgrupChi.push({id: doc.id, ...misdatosformateados});
          });
          this.ncontador++;

          
         // console.log(doc.data());
        });
        this.listaAgrupChiPanel=this.listaAgrupChi;
        console.log(this.listaAgrupChiPanel);
        if(this.ncontador==4)
          this.loadingController.dismiss();

      });

      this.cloud.getAgrupsCoro()
      .then((miCoro)=>{
        this.listaAgrupCoro=[];
        this.delete();
        miCoro.forEach((doc)=>{
          let misdatos=doc.data();
          let misdatosformateados={}
          misdatosformateados['director']=misdatos.director; //copio todos los datos normales
          misdatosformateados['nombre']=misdatos.nombre;
          misdatosformateados['tipo']=misdatos.tipo;
          misdatosformateados['origen']=misdatos.origen;
          misdatosformateados['horario']=[];
          let i=0;
          let ultimahora="";
          let todasMisPromesas:Promise<any>[]=[]; 

          misdatos.horario.forEach((actuacion)=>{
            //console.log(actuacion);
            if(i%2!=0){
              let referencia:DocumentReference = actuacion;
              todasMisPromesas.push(this.cargaubi(actuacion,ultimahora));
            }else{
              ultimahora=actuacion;
            }
            i++;
          });
          Promise.all(todasMisPromesas).then(values=>{
            misdatosformateados['horario']=values; 
          }).then(()=>{
            
            this.listaAgrupCoro.push({id: doc.id, ...misdatosformateados});
          });
          this.ncontador++;

          
         // console.log(doc.data());
        });
        this.listaAgrupCoroPanel=this.listaAgrupCoro;
        console.log(this.listaAgrupCoroPanel);
        if(this.ncontador==4)
          this.loadingController.dismiss();

      });
     
      this.cloud.getAgrupsCuarteta()
      .then((miCuar)=>{
        this.listaAgrupCuar=[];
        this.delete();
        miCuar.forEach((doc)=>{
          let misdatos=doc.data();
          let misdatosformateados={}
          misdatosformateados['director']=misdatos.director; //copio todos los datos normales
          misdatosformateados['nombre']=misdatos.nombre;
          misdatosformateados['tipo']=misdatos.tipo;
          misdatosformateados['origen']=misdatos.origen;
          misdatosformateados['horario']=[];
          let i=0;
          let ultimahora="";
          let todasMisPromesas:Promise<any>[]=[]; 

          misdatos.horario.forEach((actuacion)=>{
            //console.log(actuacion);
            if(i%2!=0){
              let referencia:DocumentReference = actuacion;
              todasMisPromesas.push(this.cargaubi(actuacion,ultimahora));
            }else{
              ultimahora=actuacion;
            }
            i++;
          });
          Promise.all(todasMisPromesas).then(values=>{
            misdatosformateados['horario']=values; 
          }).then(()=>{
            
            this.listaAgrupCuar.push({id: doc.id, ...misdatosformateados});
          });
          
          this.ncontador++;
          
         // console.log(doc.data());
        });
        this.listaAgrupCuarPanel=this.listaAgrupCuar;
        console.log(this.listaAgrupCuarPanel);
        if(this.ncontador==4)
         this.loadingController.dismiss();

      });
      

      //cuando todas estén resueltas, es cuando cierras.
  }
async cargaubi(ref:DocumentReference,horario:string):Promise<any>{
  let result:any;
  let promise=ref.get().then(doc=>{
      return {horario:horario,ubicacionnombre:doc.data().nombre,ubicacionpos:doc.data().pos};
  }); 
  result=await promise;
  return result;
    
 }
  async presentLoading(msg){
    let myloading=await this.loadingController.create({
      message:msg
    });
    return await myloading.present();
  }

  async delete(){
    await this.dynamicList.closeSlidingItems();
  }

  updateCat(cat: Promise<any>) {
    cat.then(dat => {
      this.category = dat;
      this.category = +this.category; //to int;
      if (this.category == 1) {
        if (this.cloud.isInfinityScrollEnabled()) {
          this.ionInfiniteScroll.disabled = false;
        } else {
          this.ionInfiniteScroll.disabled = true;
        }
      } else {
        this.ionInfiniteScroll.disabled = false;
      }

    });
  }

  async mostrarAgrup(key,nombre, director, origen, tipo, horario){
    const modal=await this.modalCont.create({
component: ModalPage,
componentProps:{
key:key,
nombre: nombre,
director: director,
origen: origen,
tipo: tipo,
horario: horario

},
    });
 return await modal.present();
  }

   /* El método que permite actualizar el indicado cuando se cambia de slide*/
   
   updateIndicatorPosition() {
    this.SwipedTabsSlider.getActiveIndex().then(i => {
      if (this.ntabs > i) {  // this condition is to avoid passing to incorrect index
        this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (i * 100) + '%,0,0)';
      }
    });
  }
  

/* El método que anima la "rayita" mientras nos estamos deslizando por el slide*/
animateIndicator(e) {
  //console.log(e.target.swiper.progress);
  if (this.SwipedTabsIndicator){
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
      ((e.target.swiper.progress * (this.ntabs - 1)) * 100) + '%,0,0)';
  }
    
}


}
