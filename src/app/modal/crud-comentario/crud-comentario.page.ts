import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CloudServiceService } from 'src/app/services/cloud-service.service';
import { LoadingController } from '@ionic/angular';

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

  constructor(private route: Router,
    private formBuilder: FormBuilder,
    private actRouter: ActivatedRoute,
    private cloud: CloudServiceService,
    public loadingController: LoadingController
    ) { }

  ngOnInit() {
    this.actRouter.queryParams.subscribe(params=>{
      if(this.route.getCurrentNavigation().extras.state){
        this.nombre=this.route.getCurrentNavigation().extras.state.nombre;
        this.usuario=this.route.getCurrentNavigation().extras.state.usuario;
      }
    })

    this.comenForm=this.formBuilder.group({

      comentario: new FormControl('', Validators.compose([Validators.required]))
    });

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
    })
    .catch((error)=>{
      this.loadingController.dismiss()
    });

    
  }

  modificarComentario(){
    let data={
comentario:this.comenForm.get('comentario').value
    }
    this.presentLoading();
    this.cloud.updateComentario(this.id,data)
    .then((doc)=>{
      this.comenForm.setValue({comentario:''});

    })
    .catch((error)=>{
      this.loadingController.dismiss()

    });
  }

  async presentLoading() {
    const myloading = await this.loadingController.create({
      message: 'Guardando'
    });
    return await myloading.present();

    
    
  }

}
