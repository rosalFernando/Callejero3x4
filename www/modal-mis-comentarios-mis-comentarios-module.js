(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-mis-comentarios-mis-comentarios-module"],{

/***/ "./src/app/modal/mis-comentarios/mis-comentarios.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modal/mis-comentarios/mis-comentarios.module.ts ***!
  \*****************************************************************/
/*! exports provided: MisComentariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisComentariosPageModule", function() { return MisComentariosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mis_comentarios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mis-comentarios.page */ "./src/app/modal/mis-comentarios/mis-comentarios.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mis_comentarios_page__WEBPACK_IMPORTED_MODULE_5__["MisComentariosPage"]
    }
];
var MisComentariosPageModule = /** @class */ (function () {
    function MisComentariosPageModule() {
    }
    MisComentariosPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mis_comentarios_page__WEBPACK_IMPORTED_MODULE_5__["MisComentariosPage"]]
        })
    ], MisComentariosPageModule);
    return MisComentariosPageModule;
}());



/***/ }),

/***/ "./src/app/modal/mis-comentarios/mis-comentarios.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/modal/mis-comentarios/mis-comentarios.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"success\">\r\n      \r\n          <ion-button fill=\"outline\" color=\"success\" slot=\"start\" (click)=\"cerrar()\" >\r\n              <ion-icon slot=\"icon-only\" color=\"light\" name=\"undo\" ></ion-icon>\r\n            </ion-button>\r\n        <ion-title style=\"text-align: start\">Mis Comentarios</ion-title>\r\n      \r\n   \r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content padding>\r\n    <ion-infinite-scroll #infiniteScroll threshold=\"10px\" >\r\n        <ion-refresher (ionRefresh)=\"doRefresh($event)\">\r\n            <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Arrastra para refrescar\" refreshingSpinner=\"crescent\"\r\n              refreshingText=\"Cargando...\">\r\n            </ion-refresher-content>\r\n          </ion-refresher>\r\n    <ion-list #dynamicList id=\"dynamicList\" >\r\n        <ion-card *ngFor=\"let item of listaComentariosPane;let i = index\" >\r\n          <ion-card-header>\r\n      \r\n              <ion-card-title>{{item.nombre}}</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-card-content style=\"font-size: 30px\">\r\n                {{item.comentario}}\r\n               </ion-card-content>\r\n               <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"borrarNota(item.id)\">\r\n                  \r\n                      <ion-icon name=\"trash\"></ion-icon>\r\n                  \r\n                </ion-fab>\r\n                <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" (click)=\"crudComentario(item.id,item.comentario,item.nombre,item.usuario)\">\r\n                  \r\n                  <ion-icon name=\"create\"></ion-icon>\r\n              \r\n            </ion-fab>\r\n        </ion-card>\r\n\r\n      </ion-list>\r\n    </ion-infinite-scroll>\r\n</ion-content>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modal/mis-comentarios/mis-comentarios.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modal/mis-comentarios/mis-comentarios.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL21pcy1jb21lbnRhcmlvcy9taXMtY29tZW50YXJpb3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modal/mis-comentarios/mis-comentarios.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/modal/mis-comentarios/mis-comentarios.page.ts ***!
  \***************************************************************/
/*! exports provided: MisComentariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisComentariosPage", function() { return MisComentariosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_cloud_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cloud-service.service */ "./src/app/services/cloud-service.service.ts");
/* harmony import */ var _crud_comentario_crud_comentario_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../crud-comentario/crud-comentario.page */ "./src/app/modal/crud-comentario/crud-comentario.page.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var MisComentariosPage = /** @class */ (function () {
    function MisComentariosPage(events, popoverController, auth, router, modaCont, cloud, toast, alertCtrl, navCon) {
        this.events = events;
        this.popoverController = popoverController;
        this.auth = auth;
        this.router = router;
        this.modaCont = modaCont;
        this.cloud = cloud;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.navCon = navCon;
    }
    MisComentariosPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cloud.getComentarioUsuario(this.auth.userDetails().email)
            .then(function (doc) {
            _this.listaComentarios = [];
            doc.forEach(function (comen) {
                _this.listaComentarios.push(__assign({ id: comen.id }, comen.data()));
            });
            _this.listaComentariosPane = _this.listaComentarios;
        });
    };
    MisComentariosPage.prototype.borrarNota = function (Item) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Eliminar',
                            message: 'Desea Eliminar?',
                            buttons: [
                                {
                                    text: 'Ups, no no ',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'que zi pezao!',
                                    handler: function () {
                                        _this.cloud.delComentario(Item);
                                        _this.cloud.getComentarioUsuario(_this.auth.userDetails().email)
                                            .then(function (doc) {
                                            _this.listaComentarios = [];
                                            doc.forEach(function (comen) {
                                                _this.listaComentarios.push(__assign({ id: comen.id }, comen.data()));
                                            });
                                            _this.listaComentariosPane = _this.listaComentarios;
                                        });
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MisComentariosPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.cloud.getComentarioUsuario(this.auth.userDetails().email)
            .then(function (doc) {
            _this.listaComentarios = [];
            doc.forEach(function (comen) {
                _this.listaComentarios.push(__assign({ id: comen.id }, comen.data()));
            });
            _this.listaComentariosPane = _this.listaComentarios;
        });
        event.target.complete();
    };
    MisComentariosPage.prototype.presentToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: msg,
                            duration: 5000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MisComentariosPage.prototype.crudComentario = function (id, comentario, nombre, usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modaCont.create({
                            component: _crud_comentario_crud_comentario_page__WEBPACK_IMPORTED_MODULE_5__["CrudComentarioPage"],
                            componentProps: {
                                id: id,
                                comentario: comentario,
                                nombre: nombre,
                                usuario: usuario,
                                guardado: true
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [2 /*return*/, modal.present()];
                }
            });
        });
    };
    MisComentariosPage.prototype.cerrar = function () {
        this.navCon.pop();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infiniteScroll'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"])
    ], MisComentariosPage.prototype, "ionInfiniteScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamicList'),
        __metadata("design:type", Object)
    ], MisComentariosPage.prototype, "dynamicList", void 0);
    MisComentariosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mis-comentarios',
            template: __webpack_require__(/*! ./mis-comentarios.page.html */ "./src/app/modal/mis-comentarios/mis-comentarios.page.html"),
            styles: [__webpack_require__(/*! ./mis-comentarios.page.scss */ "./src/app/modal/mis-comentarios/mis-comentarios.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            src_app_services_cloud_service_service__WEBPACK_IMPORTED_MODULE_4__["CloudServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], MisComentariosPage);
    return MisComentariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=modal-mis-comentarios-mis-comentarios-module.js.map