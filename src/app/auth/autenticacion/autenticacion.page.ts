import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.page.html',
  styleUrls: ['./autenticacion.page.scss'],
})
export class AutenticacionPage implements OnInit {

  validationForm: FormGroup;
  errorMsg: string = '';
  

  constructor(
    private navCon: NavController,
    private route: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.validationForm=this.formBuilder.group({
      
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.minLength(7),
        Validators.required
      ]))

    });

  }

  validationMsg={
    'email':[
      { type: 'required', message: 'Email obligatorio' },
      { type: 'pattern', message: 'Introduce un Email correcto' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña obligatoria.' },
      { type: 'minlength', message: 'La contraseña debe tener al menos 7 carateres.' }
    ]
  };
  

  loginUser(value){
    this.authService.loginUser(value)
    .then(res=>{
      console.log('dentro login')
      this.errorMsg='';
     
      this.route.navigate(['mapa-principal'])
    }
    )
    .catch(res=>{
      this.errorMsg="La cuenta no existe, Intenta registrarte."
    })
  }

  irRegistro(){
    this.route.navigate(['registro']);

  }
  irListas(){
    this.route.navigate(['listas']);

  }

}
