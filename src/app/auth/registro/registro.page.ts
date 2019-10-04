import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  validationForm: FormGroup;

  errMsg: string='';
  successMsg:string='';

  validationMsg = {
    'email':[
      { type: 'required', message: 'Email obligatorio' },
      { type: 'pattern', message: 'Introduce un Email correcto' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña obligatoria.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 7 carateres.' }
    ]
  };

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    public toastController: ToastController,
    public route: Router
  ) { }

  ngOnInit() {

    this.validationForm=this.formBuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(7),
        Validators.required
      ]))
    });

  }

  registro(value){
    
      this.authService.registerUser(value)
    .then(res =>{

      this.successMsg="Cuenta creada";
      this.route.navigate(['mapa-principal'])

    })
    .catch(res=>{
      this.errMsg="imposible crear cuenta"
    })
    
    

  }
  irLogin(){
    this.route.navigate(['autenticacion']);
  }


  

}
