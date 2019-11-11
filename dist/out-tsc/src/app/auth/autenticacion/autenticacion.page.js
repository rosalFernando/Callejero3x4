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
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
var AutenticacionPage = /** @class */ (function () {
    function AutenticacionPage(navCon, route, authService, formBuilder) {
        this.navCon = navCon;
        this.route = route;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.errorMsg = '';
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
    AutenticacionPage.prototype.ngOnInit = function () {
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
    AutenticacionPage.prototype.loginUser = function (value) {
        var _this = this;
        this.authService.loginUser(value)
            .then(function (res) {
            console.log('dentro login');
            _this.errorMsg = '';
            _this.route.navigate(['mapa-principal']);
        })
            .catch(function (res) {
            _this.errorMsg = "La cuenta no existe, Intenta registrarte.";
        });
    };
    AutenticacionPage.prototype.irRegistro = function () {
        this.route.navigate(['registro']);
    };
    AutenticacionPage.prototype.irListas = function () {
        this.route.navigate(['listas']);
    };
    AutenticacionPage = __decorate([
        Component({
            selector: 'app-autenticacion',
            templateUrl: './autenticacion.page.html',
            styleUrls: ['./autenticacion.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            Router,
            AuthService,
            FormBuilder])
    ], AutenticacionPage);
    return AutenticacionPage;
}());
export { AutenticacionPage };
//# sourceMappingURL=autenticacion.page.js.map