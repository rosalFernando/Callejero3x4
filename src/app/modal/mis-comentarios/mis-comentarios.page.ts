import { Component, OnInit } from '@angular/core';
import { Events, NavParams, PopoverController, ModalController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CloudServiceService } from 'src/app/services/cloud-service.service';

@Component({
  selector: 'app-mis-comentarios',
  templateUrl: './mis-comentarios.page.html',
  styleUrls: ['./mis-comentarios.page.scss'],
})
export class MisComentariosPage implements OnInit {

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
  ) { }

  ngOnInit() {
    
    this.cloud.getComentarioUsuario(this.auth.userDetails().email).then((doc)=>{
      this.listaComentarios=[];
      doc.forEach((comen)=>{
        this.listaComentarios.push({id:comen.id, ...comen})
      });
      this.listaComentariosPane=this.listaComentarios
     })

  }

  delComentarios(id){
    this.cloud.delComentario(id)
    .then(()=>{
      this.presentToast('comentarios eliminado')
    })
    .catch(()=>{
      this.presentToast('Error eliminar.')
    })
    
  }
  modComentario(){
    this.cloud.updateComentario(this.key,this.comentario)
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 5000
    });
    toast.present();
  }

}
