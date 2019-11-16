import { Component, OnInit, ViewChild } from '@angular/core';
import { Events,  PopoverController, ModalController, ToastController, IonInfiniteScroll, AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CloudServiceService } from 'src/app/services/cloud-service.service';
import { CrudComentarioPage } from '../crud-comentario/crud-comentario.page';

@Component({
  selector: 'app-mis-comentarios',
  templateUrl: './mis-comentarios.page.html',
  styleUrls: ['./mis-comentarios.page.scss'],
})
export class MisComentariosPage implements OnInit {

  @ViewChild('infiniteScroll') ionInfiniteScroll: IonInfiniteScroll;
  @ViewChild('dynamicList') dynamicList;

  usuario;
  agrupacion;
  key;
  comentario;
  listaComentarios: any[];
  listaComentariosPane: any[];


  constructor(
    private events: Events,
    
    private popoverController: PopoverController,
    private auth: AuthService,
    private router: Router,
    private modaCont: ModalController,
    private cloud: CloudServiceService,
    private toast:ToastController,
    private alertCtrl: AlertController,
    private navCon: NavController,
  
  ) { }

  ngOnInit() {
    
    this.cloud.getComentarioUsuario(this.auth.userDetails().email)
    .then((doc)=>{
      this.listaComentarios=[];
      doc.forEach((comen)=>{
        this.listaComentarios.push({id:comen.id, ...comen.data()})
      });
      this.listaComentariosPane=this.listaComentarios
     })

  }

  async borrarNota(Item) {

    
    let alert = await this.alertCtrl.create({
      header: 'Eliminar',
      message: 'Desea Eliminar?',
      buttons: [
        {
          text: 'Ups, no no ',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'que zi pezao!',
          handler: () => {

            this.cloud.delComentario(Item);

            this.cloud.getComentarioUsuario(this.auth.userDetails().email)
            .then((doc)=>{
              this.listaComentarios=[];
              doc.forEach((comen)=>{
                this.listaComentarios.push({id:comen.id, ...comen.data()})
              });
              this.listaComentariosPane=this.listaComentarios
            
              
            });

            console.log('Confirm Okay');
          }
        }
      ]
    });

     await alert.present();

}
doRefresh(event) {
  this.cloud.getComentarioUsuario(this.auth.userDetails().email)
    .then((doc)=>{
      this.listaComentarios=[];
      doc.forEach((comen)=>{
        this.listaComentarios.push({id:comen.id, ...comen.data()})
      });
      this.listaComentariosPane=this.listaComentarios
    
      
    });
    event.target.complete();
}
  

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }

 async crudComentario(id,comentario,nombre,usuario){
    let modal= await this.modaCont.create({
      component:CrudComentarioPage,
      componentProps:{
        id:id,
        comentario:comentario,
        nombre:nombre,
        usuario:usuario,
        guardado:true
      }
    })
    return modal.present();
  }

  cerrar(){
    this.navCon.pop()
  }

  

}
