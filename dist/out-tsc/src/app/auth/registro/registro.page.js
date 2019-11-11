var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
var RegistroPage = /** @class */ (function () {
    function RegistroPage(navCtrl, authService, formBuilder, toastController, route) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.route = route;
        this.errMsg = '';
        this.successMsg = '';
        this.validationMsg = {
            'email': [
                { type: 'required', message: 'Email obligatorio' },
                { type: 'pattern', message: 'Introduce un Email correcto' }
            ],
            'password': [
                { type: 'required', message: 'Contraseña obligatoria.' },
                { type: 'minlength', message: 'La contraseña debe tener al menos 7 carateres.' }
            ]
        };
    }
    RegistroPage.prototype.ngOnInit = function () {
        this.validationForm = this.formBuilder.group({
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl('', Validators.compose([
                Validators.minLength(7),
                Validators.required
            ]))
        });
    };
    RegistroPage.prototype.registro = function (value) {
        var _this = this;
        this.authService.registerUser(value)
            .then(function (res) {
            _this.successMsg = "Cuenta creada";
            _this.route.navigate(['mapa-principal']);
        })
            .catch(function (res) {
            _this.errMsg = "imposible crear cuenta";
        });
    };
    RegistroPage.prototype.irLogin = function () {
        this.route.navigate(['autenticacion']);
    };
    RegistroPage = __decorate([
        Component({
            selector: 'app-registro',
            templateUrl: './registro.page.html',
            styleUrls: ['./registro.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            AuthService,
            FormBuilder,
            ToastController,
            Router])
    ], RegistroPage);
    return RegistroPage;
}());
export { RegistroPage };
//# sourceMappingURL=registro.page.js.map