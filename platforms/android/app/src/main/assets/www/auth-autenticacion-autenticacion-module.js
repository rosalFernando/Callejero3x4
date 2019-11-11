(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-autenticacion-autenticacion-module"],{

/***/ "./src/app/auth/autenticacion/autenticacion.module.ts":
/*!************************************************************!*\
  !*** ./src/app/auth/autenticacion/autenticacion.module.ts ***!
  \************************************************************/
/*! exports provided: AutenticacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacionPageModule", function() { return AutenticacionPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _autenticacion_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autenticacion.page */ "./src/app/auth/autenticacion/autenticacion.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _autenticacion_page__WEBPACK_IMPORTED_MODULE_5__["AutenticacionPage"]
    }
];
var AutenticacionPageModule = /** @class */ (function () {
    function AutenticacionPageModule() {
    }
    AutenticacionPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_autenticacion_page__WEBPACK_IMPORTED_MODULE_5__["AutenticacionPage"]]
        })
    ], AutenticacionPageModule);
    return AutenticacionPageModule;
}());



/***/ }),

/***/ "./src/app/auth/autenticacion/autenticacion.page.html":
/*!************************************************************!*\
  !*** ./src/app/auth/autenticacion/autenticacion.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"success\">\r\n    <ion-title color=\"light\" style=\"text-align: center\">Inicio de Sesiòn</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content padding>\r\n  <form class=\"form\" [formGroup]=\"validationForm\"  (ngSubmit)=\"loginUser(validationForm.value)\">\r\n \r\n    <ion-item>\r\n      <ion-label  position=\"floating\" color=\"primary\">Email</ion-label>\r\n      <ion-input type=\"text\" formControlName=\"email\"></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validationMsg.email\">\r\n        <div class=\"error-message\" *ngIf=\"validationForm.get('email').hasError(validation.type) && (validationForm.get('email').dirty || validationForm.get('email').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n \r\n    <ion-item>\r\n      <ion-label  position=\"floating\" color=\"primary\">Contraseña</ion-label>\r\n      <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\r\n    </ion-item>\r\n    <div class=\"validation-errors\">\r\n      <ng-container *ngFor=\"let validation of validationMsg.password\">\r\n        <div class=\"error-message\" *ngIf=\"validationForm.get('password').hasError(validation.type) && (validationForm.get('password').dirty || validationForm.get('password').touched)\">\r\n          {{ validation.message }}\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n \r\n    <ion-button class=\"submit-btn\" type=\"submit\"  [disabled]=\"!validationForm.valid\">Acpetar</ion-button>\r\n \r\n    <label class=\"error-message\">{{errorMessage}}</label>\r\n  </form>\r\n  <p class=\"go-to-register\">\r\n    ¿Aun no te has registrado? <a (click)=\"irRegistro()\">Registrate.</a>\r\n  </p>\r\n</ion-content>\r\n<ion-footer >\r\n    <ion-toolbar color=\"success\">\r\n      <ion-title color=\"light\" style=\"font-size: 15px; text-align: center\">COAC Córdoba.</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer>\r\n"

/***/ }),

/***/ "./src/app/auth/autenticacion/autenticacion.page.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/autenticacion/autenticacion.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0ZW50aWNhY2lvbi9hdXRlbnRpY2FjaW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/autenticacion/autenticacion.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/autenticacion/autenticacion.page.ts ***!
  \**********************************************************/
/*! exports provided: AutenticacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutenticacionPage", function() { return AutenticacionPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autenticacion',
            template: __webpack_require__(/*! ./autenticacion.page.html */ "./src/app/auth/autenticacion/autenticacion.page.html"),
            styles: [__webpack_require__(/*! ./autenticacion.page.scss */ "./src/app/auth/autenticacion/autenticacion.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AutenticacionPage);
    return AutenticacionPage;
}());



/***/ })

}]);
//# sourceMappingURL=auth-autenticacion-autenticacion-module.js.map