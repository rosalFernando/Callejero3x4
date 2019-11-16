import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CloudServiceService } from 'src/app/services/cloud-service.service';
import { LoadingController, ToastController, NavParams, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crud-comentario',
  templateUrl: './crud-comentario.page.html',
  styleUrls: ['./crud-comentario.page.scss'],
})
export class CrudComentarioPage implements OnInit {

  comenForm: FormGroup;
  usuario;
  nombre;
  private id;
  comentario='';
  guardado=false;

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private actRouter: ActivatedRoute,
    private cloud: CloudServiceService,
    public loadingController: LoadingController,
    private toast:ToastController,
    private navParam: NavParams,
    private modalCont:ModalController,
    private navCont:NavController
    ) { }

  ngOnInit() {
    
        this.nombre=this.navParam.get('nombre');
        this.usuario=this.navParam.get('usuario');
        this.comentario=this.navParam.get('comentario')
        this.guardado=this.navParam.get('guardado')
       
     
if(this.guardado==false){
  console.log(this.guardado)
  this.comenForm=this.formBuilder.group({

    comentario: new FormControl('', Validators.compose([Validators.required]))
  });
}else{
  console.log(this.guardado)
  this.comenForm=this.formBuilder.group({

    comentario: new FormControl(this.comentario, Validators.compose([Validators.required]))
  });
}
   

  }

  guardarComentario(){
    
      let data={
        usuario: this.usuario,
        nombre:this.nombre,
        comentario:this.comenForm.get('comentario').value
      }
      this.presentLoading();
    
      this.cloud.addComentario(data)
      .then((doc)=>{
        this.comenForm.setValue({comentario:''});
        this.loadingController.dismiss()
        this.cerrar()
      })
      .catch((error)=>{
        this.loadingController.dismiss()
        this.presentToast('Erro al Guardar')
      });
   
 

    
  }

  modComentario(){
    let data={

      comentario:this.comenForm.get('comentario').value,
      nombre:this.nombre,
      usuario:this.usuario
          }
          this.presentLoading();
          this.cloud.updateComentario(this.id,data)
          .then((doc)=>{
            this.comenForm.setValue({comentario:''});
            this.loadingController.dismiss()
            this.presentToast('Comentario modificado')
            this.cerrar()
  
      
          })
          .catch((error)=>{
            
            this.loadingController.dismiss()
            this.presentToast('No se puede modificar el comentario')
      
          });
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

  async presentLoading() {
    const myloading = await this.loadingController.create({
      message: 'Guardando'
    });
    return await myloading.present();

    
    
  }

  async presentToast(msg) {
    const toast = await this.toast.create({
      message: msg,
      duration: 1000
    });
    toast.present();
  }

  cerrar(){
    this.modalCont.dismiss()
    
  }

}
