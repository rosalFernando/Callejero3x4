(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["listas-listas-module"],{

/***/ "./src/app/listas/listas.module.ts":
/*!*****************************************!*\
  !*** ./src/app/listas/listas.module.ts ***!
  \*****************************************/
/*! exports provided: ListasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListasPageModule", function() { return ListasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listas_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listas.page */ "./src/app/listas/listas.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _listas_page__WEBPACK_IMPORTED_MODULE_5__["ListasPage"]
    }
];
var ListasPageModule = /** @class */ (function () {
    function ListasPageModule() {
    }
    ListasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_listas_page__WEBPACK_IMPORTED_MODULE_5__["ListasPage"]]
        })
    ], ListasPageModule);
    return ListasPageModule;
}());



/***/ }),

/***/ "./src/app/listas/listas.page.html":
/*!*****************************************!*\
  !*** ./src/app/listas/listas.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n    <ion-toolbar color=\"success\" >\n        <ion-title color=\"light\" style=\"text-align: center\">Agrupaciones</ion-title>\n      </ion-toolbar>\n\n  <ion-segment [(ngModel)]=\"category\" (ionChange)=\"slides.slideTo(category)\"\n    style=\"background-color:mediumpurple\" color=\"light\">\n    <ion-segment-button layout=\"icon-start\" value=\"0\" style=\"--padding-end:0px;--padding-start:0px\">\n\n      <ion-label>Comparsa</ion-label>\n    </ion-segment-button>\n    <ion-segment-button layout=\"icon-start\" value=\"1\" style=\"--padding-end:0px;--padding-start:0px\">\n\n      <ion-label>Chirigota</ion-label>\n    </ion-segment-button>\n    <ion-segment-button layout=\"icon-start\" value=\"2\" style=\"--padding-end:0px;--padding-start:0px\">\n\n      <ion-label>Coro</ion-label>\n    </ion-segment-button>\n    <ion-segment-button layout=\"icon-start\" value=\"3\" style=\"--padding-end:0px;--padding-start:0px\">\n\n      <ion-label>Cuarteto</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n  <div id='indicator' class=\"SwipedTabs-indicatorSegment\" [ngStyle]=\" \n  {'width.%': (100/this.tabs.length)}\" style=\"margin-top:2px\"></div>\n  \n  \n  \n  \n</ion-header>\n\n<ion-content class=\"fixed-scroll\">\n    <ion-slides #slides (ionSlideTransitionStart)=\"updateIndicatorPosition();updateCat(slides.getActiveIndex())\"\n    (ionSlideWillChange)=\"updateIndicatorPosition()\" (ionSlideDidChange)=\"updateIndicatorPosition()\" #SwipedTabsSlider\n    (ionSlideDrag)=\"animateIndicator($event)\">\n    <ion-slide> \n      <ion-content >\n        <ion-infinite-scroll #infiniteScroll threshold=\"10px\" >\n        <ion-list #dynamicList id=\"dynamicList\" >\n          <ion-item *ngFor=\"let item of listaAgrupComPanel;let i = index\" >\n            <ion-label >\n              <h3>{{item.nombre}}</h3>\n              <h4>Director: {{item.director}}</h4>\n              \n            </ion-label>\n            <img src=\"../../../assets/img/chir.png\"  slot=\"end\" style=\"width:40px;margin:0px\" (click)=\"mostrarAgrup(item.key,item.nombre,item.director,item.origen,item.tipo,item.horario)\">\n          </ion-item>\n  \n        </ion-list>\n      </ion-infinite-scroll>\n      </ion-content>\n      </ion-slide>\n      \n     \n    <ion-slide>\n      <ion-content class=\"fixed-scroll\">\n        <ion-infinite-scroll #infiniteScroll threshold=\"10px\">\n      <ion-list #dynamicList id=\"dynamicList\">\n        <ion-item *ngFor=\"let item of listaAgrupChiPanel;let i = index\">\n          <ion-label >\n            <h3>{{item.nombre}}</h3>\n            <h4>Director: {{item.director}}</h4>\n            \n          </ion-label>\n          <img src=\"../../../assets/img/comp.png\"  slot=\"end\" style=\"width:40px;margin:0px\" (click)=\"mostrarAgrup(item.key,item.nombre,item.director,item.origen,item.tipo,item.horario)\">\n        </ion-item>\n\n      </ion-list>\n        </ion-infinite-scroll>\n      </ion-content>\n    </ion-slide>\n    <ion-slide>\n        <ion-content class=\"fixed-scroll\">\n            <ion-infinite-scroll #infiniteScroll threshold=\"10px\">\n      <ion-list #dynamicList id=\"dynamicList\">\n        <ion-item *ngFor=\"let item of listaAgrupCoroPanel;let i = index\">\n          <ion-label >\n            <h3>{{item.nombre}}</h3>\n            <h4>Director: {{item.director}}</h4>\n            \n          </ion-label>\n          <img src=\"../../../assets/img/cor.png\"  slot=\"end\" style=\"width:40px;margin:0px\" (click)=\"mostrarAgrup(item.key,item.nombre,item.director,item.origen,item.tipo,item.horario)\">\n        </ion-item>\n\n      </ion-list>\n            </ion-infinite-scroll>\n        </ion-content>\n    </ion-slide>\n    <ion-slide>\n        <ion-content class=\"fixed-scroll\">\n            <ion-infinite-scroll #infiniteScroll threshold=\"10px\">\n      <ion-list #dynamicList id=\"dynamicList\">\n        <ion-item *ngFor=\"let item of listaAgrupCuarPanel;let i = index\">\n          <ion-label >\n            <h3>{{item.nombre}}</h3>\n            <h4>Director: {{item.director}}</h4>\n            \n          </ion-label>\n          <img src=\"../../../assets/img/cua.png\"  slot=\"end\" style=\"width:40px;margin:0px\" (click)=\"mostrarAgrup(item.key,item.nombre,item.director,item.origen,item.tipo,item.horario)\">\n        </ion-item>\n\n      </ion-list>\n            </ion-infinite-scroll>\n        </ion-content>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n\n<ion-footer >\n    <ion-toolbar color=\"success\">\n      <ion-title color=\"light\" style=\"font-size: 15px; text-align: center\">COAC Córdoba.</ion-title>\n    </ion-toolbar>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/listas/listas.page.scss":
/*!*****************************************!*\
  !*** ./src/app/listas/listas.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* la \"rayita\" que indica la navegación entre slides */\n.SwipedTabs-indicatorSegment {\n  transition: 0s all;\n  -webkit-transform-origin: top 0 left 0;\n          transform-origin: top 0 left 0;\n  height: 2px;\n  position: relative;\n  top: -2px;\n  background-color: var(--ion-color-tertiary) !important; }\n.button-native {\n  padding: 0px !important; }\n/* para que el slide ocupe toda la pantalla */\nion-slide.swiper-slide {\n  display: block; }\n.slides {\n  height: 100%; }\n.fixed-scroll {\n  height: 100% !important;\n  overflow-y: scroll;\n  position: relative; }\n.fixed-scroll ::-webkit-scrollbar {\n    display: none !important; }\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFzL2xpc3Rhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3Rhcy9DOlxcVXNlcnNcXERlbGxcXERlc2t0b3BcXGNvcGlhQ2FsbGVqZXJvXFxjYWxsZWplcm8zeDQvc3JjXFxhcHBcXGxpc3Rhc1xcbGlzdGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsc0RBQUE7QUFDQTtFQUlJLGtCQUFtQjtFQUNuQixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHNEQUFzRCxFQUFBO0FBRTFEO0VBQ0ksdUJBQXNCLEVBQUE7QUFFMUIsNkNBQUE7QUFDQTtFQUNJLGNBQWEsRUFBQTtBQUVqQjtFQUNJLFlBQVksRUFBQTtBQUVoQjtFQUNJLHVCQUFxQjtFQUNyQixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQUE7QUFIckI7SUFLUSx3QkFBd0IsRUFBQTtBQUdoQzs7RUFFRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saXN0YXMvbGlzdGFzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIGxhIFwicmF5aXRhXCIgcXVlIGluZGljYSBsYSBuYXZlZ2FjacOzbiBlbnRyZSBzbGlkZXMgKi9cbi5Td2lwZWRUYWJzLWluZGljYXRvclNlZ21lbnQge1xuICAtd2Via2l0LXRyYW5zaXRpb246IDBzIGFsbDtcbiAgLW1vei10cmFuc2l0aW9uOiAwcyBhbGw7XG4gIC1vLXRyYW5zaXRpb246IDBzIGFsbDtcbiAgdHJhbnNpdGlvbjogMHMgYWxsO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgMCBsZWZ0IDA7XG4gIGhlaWdodDogMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KSAhaW1wb3J0YW50OyB9XG5cbi5idXR0b24tbmF0aXZlIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7IH1cblxuLyogcGFyYSBxdWUgZWwgc2xpZGUgb2N1cGUgdG9kYSBsYSBwYW50YWxsYSAqL1xuaW9uLXNsaWRlLnN3aXBlci1zbGlkZSB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmZpeGVkLXNjcm9sbCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuZml4ZWQtc2Nyb2xsIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lOyB9XG4iLCIvKiBsYSBcInJheWl0YVwiIHF1ZSBpbmRpY2EgbGEgbmF2ZWdhY2nDs24gZW50cmUgc2xpZGVzICovXHJcbi5Td2lwZWRUYWJzLWluZGljYXRvclNlZ21lbnR7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDBzIGFsbDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogIDBzIGFsbDtcclxuICAgIC1vLXRyYW5zaXRpb246ICAwcyBhbGw7XHJcbiAgICB0cmFuc2l0aW9uOiAgMHMgYWxsO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIDAgbGVmdCAwO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ1dHRvbi1uYXRpdmV7XHJcbiAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi8qIHBhcmEgcXVlIGVsIHNsaWRlIG9jdXBlIHRvZGEgbGEgcGFudGFsbGEgKi9cclxuaW9uLXNsaWRlLnN3aXBlci1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbi5zbGlkZXN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmZpeGVkLXNjcm9sbHtcclxuICAgIGhlaWdodDoxMDAlIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93LXk6c2Nyb2xsO1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuOjotd2Via2l0LXNjcm9sbGJhcixcclxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/listas/listas.page.ts":
/*!***************************************!*\
  !*** ./src/app/listas/listas.page.ts ***!
  \***************************************/
/*! exports provided: ListasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListasPage", function() { return ListasPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cloud_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cloud-service.service */ "./src/app/services/cloud-service.service.ts");
/* harmony import */ var _modal_modal_modal_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/modal/modal.page */ "./src/app/modal/modal/modal.page.ts");
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





var ListasPage = /** @class */ (function () {
    function ListasPage(loadingController, router, modalCont, actionSheetController, cloud, toast) {
        this.loadingController = loadingController;
        this.router = router;
        this.modalCont = modalCont;
        this.actionSheetController = actionSheetController;
        this.cloud = cloud;
        this.toast = toast;
        // Slides
        this.SwipedTabsIndicator = null;
        this.tabs = ["selectTab(0)", "selectTab(1)", "selectTab(2)", "selectTab(3)"];
        this.category = "0";
        this.ntabs = 4;
        this.listaAgrupCom = [];
        this.listaAgrupComPanel = [];
        this.listaAgrupChi = [];
        this.listaAgrupChiPanel = [];
        this.listaAgrupCoro = [];
        this.listaAgrupCoroPanel = [];
        this.listaAgrupCuar = [];
        this.listaAgrupCuarPanel = [];
        this.ncontador = 0;
    }
    ListasPage.prototype.presentToast = function (msg) {
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
    ListasPage.prototype.errorCargando = function () {
        console.log(this.ncontador);
        if (this.ncontador < 4) {
            this.loadingController.dismiss();
            this.presentToast("Error cargando información");
        }
    };
    ListasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.category = "0";
        this.SwipedTabsSlider.length().then(function (l) {
            _this.ntabs = l;
        });
    };
    ListasPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    ListasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ncontador = 0;
        setTimeout(function () {
            _this.errorCargando();
        }, 20000);
        this.presentLoading('Cargando...');
        this.cloud.getAgrupsComparsa()
            .then(function (miCom) {
            _this.listaAgrupCom = [];
            _this.delete();
            miCom.forEach(function (doc) {
                var misdatos = doc.data();
                var misdatosformateados = {};
                misdatosformateados['director'] = misdatos.director; //copio todos los datos normales
                misdatosformateados['nombre'] = misdatos.nombre;
                misdatosformateados['tipo'] = misdatos.tipo;
                misdatosformateados['origen'] = misdatos.origen;
                misdatosformateados['horario'] = [];
                var i = 0;
                var ultimahora = "";
                var todasMisPromesas = [];
                misdatos.horario.forEach(function (actuacion) {
                    //console.log(actuacion);
                    if (i % 2 != 0) {
                        var referencia = actuacion;
                        todasMisPromesas.push(_this.cargaubi(actuacion, ultimahora));
                    }
                    else {
                        ultimahora = actuacion;
                    }
                    i++;
                });
                Promise.all(todasMisPromesas).then(function (values) {
                    misdatosformateados['horario'] = values;
                }).then(function () {
                    _this.listaAgrupCom.push(__assign({ id: doc.id }, misdatosformateados));
                });
                _this.ncontador++;
                // console.log(doc.data());
            });
            _this.listaAgrupComPanel = _this.listaAgrupCom;
            console.log(_this.listaAgrupComPanel);
            if (_this.ncontador == 4)
                _this.loadingController.dismiss();
        });
        this.cloud.getAgrupsChirigota()
            .then(function (miChiri) {
            _this.listaAgrupChi = [];
            _this.delete();
            miChiri.forEach(function (doc) {
                var misdatos = doc.data();
                var misdatosformateados = {};
                misdatosformateados['director'] = misdatos.director; //copio todos los datos normales
                misdatosformateados['nombre'] = misdatos.nombre;
                misdatosformateados['tipo'] = misdatos.tipo;
                misdatosformateados['origen'] = misdatos.origen;
                misdatosformateados['horario'] = [];
                var i = 0;
                var ultimahora = "";
                var todasMisPromesas = [];
                misdatos.horario.forEach(function (actuacion) {
                    //console.log(actuacion);
                    if (i % 2 != 0) {
                        var referencia = actuacion;
                        todasMisPromesas.push(_this.cargaubi(actuacion, ultimahora));
                    }
                    else {
                        ultimahora = actuacion;
                    }
                    i++;
                });
                Promise.all(todasMisPromesas).then(function (values) {
                    misdatosformateados['horario'] = values;
                }).then(function () {
                    _this.listaAgrupChi.push(__assign({ id: doc.id }, misdatosformateados));
                });
                _this.ncontador++;
                // console.log(doc.data());
            });
            _this.listaAgrupChiPanel = _this.listaAgrupChi;
            console.log(_this.listaAgrupChiPanel);
            if (_this.ncontador == 4)
                _this.loadingController.dismiss();
        });
        this.cloud.getAgrupsCoro()
            .then(function (miCoro) {
            _this.listaAgrupCoro = [];
            _this.delete();
            miCoro.forEach(function (doc) {
                var misdatos = doc.data();
                var misdatosformateados = {};
                misdatosformateados['director'] = misdatos.director; //copio todos los datos normales
                misdatosformateados['nombre'] = misdatos.nombre;
                misdatosformateados['tipo'] = misdatos.tipo;
                misdatosformateados['origen'] = misdatos.origen;
                misdatosformateados['horario'] = [];
                var i = 0;
                var ultimahora = "";
                var todasMisPromesas = [];
                misdatos.horario.forEach(function (actuacion) {
                    //console.log(actuacion);
                    if (i % 2 != 0) {
                        var referencia = actuacion;
                        todasMisPromesas.push(_this.cargaubi(actuacion, ultimahora));
                    }
                    else {
                        ultimahora = actuacion;
                    }
                    i++;
                });
                Promise.all(todasMisPromesas).then(function (values) {
                    misdatosformateados['horario'] = values;
                }).then(function () {
                    _this.listaAgrupCoro.push(__assign({ id: doc.id }, misdatosformateados));
                });
                _this.ncontador++;
                // console.log(doc.data());
            });
            _this.listaAgrupCoroPanel = _this.listaAgrupCoro;
            console.log(_this.listaAgrupCoroPanel);
            if (_this.ncontador == 4)
                _this.loadingController.dismiss();
        });
        this.cloud.getAgrupsCuarteta()
            .then(function (miCuar) {
            _this.listaAgrupCuar = [];
            _this.delete();
            miCuar.forEach(function (doc) {
                var misdatos = doc.data();
                var misdatosformateados = {};
                misdatosformateados['director'] = misdatos.director; //copio todos los datos normales
                misdatosformateados['nombre'] = misdatos.nombre;
                misdatosformateados['tipo'] = misdatos.tipo;
                misdatosformateados['origen'] = misdatos.origen;
                misdatosformateados['horario'] = [];
                var i = 0;
                var ultimahora = "";
                var todasMisPromesas = [];
                misdatos.horario.forEach(function (actuacion) {
                    //console.log(actuacion);
                    if (i % 2 != 0) {
                        var referencia = actuacion;
                        todasMisPromesas.push(_this.cargaubi(actuacion, ultimahora));
                    }
                    else {
                        ultimahora = actuacion;
                    }
                    i++;
                });
                Promise.all(todasMisPromesas).then(function (values) {
                    misdatosformateados['horario'] = values;
                }).then(function () {
                    _this.listaAgrupCuar.push(__assign({ id: doc.id }, misdatosformateados));
                });
                _this.ncontador++;
                // console.log(doc.data());
            });
            _this.listaAgrupCuarPanel = _this.listaAgrupCuar;
            console.log(_this.listaAgrupCuarPanel);
            if (_this.ncontador == 4)
                _this.loadingController.dismiss();
        });
        //cuando todas estén resueltas, es cuando cierras.
    };
    ListasPage.prototype.cargaubi = function (ref, horario) {
        return __awaiter(this, void 0, void 0, function () {
            var result, promise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promise = ref.get().then(function (doc) {
                            return { horario: horario, ubicacionnombre: doc.data().nombre, ubicacionpos: doc.data().pos };
                        });
                        return [4 /*yield*/, promise];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ListasPage.prototype.presentLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var myloading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: msg
                        })];
                    case 1:
                        myloading = _a.sent();
                        return [4 /*yield*/, myloading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ListasPage.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.dynamicList.closeSlidingItems()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ListasPage.prototype.updateCat = function (cat) {
        var _this = this;
        cat.then(function (dat) {
            _this.category = dat;
            _this.category = +_this.category; //to int;
            if (_this.category == 1) {
                if (_this.cloud.isInfinityScrollEnabled()) {
                    _this.ionInfiniteScroll.disabled = false;
                }
                else {
                    _this.ionInfiniteScroll.disabled = true;
                }
            }
            else {
                _this.ionInfiniteScroll.disabled = false;
            }
        });
    };
    ListasPage.prototype.mostrarAgrup = function (key, nombre, director, origen, tipo, horario) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCont.create({
                            component: _modal_modal_modal_page__WEBPACK_IMPORTED_MODULE_4__["ModalPage"],
                            componentProps: {
                                key: key,
                                nombre: nombre,
                                director: director,
                                origen: origen,
                                tipo: tipo,
                                horario: horario
                            },
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* El método que permite actualizar el indicado cuando se cambia de slide*/
    ListasPage.prototype.updateIndicatorPosition = function () {
        var _this = this;
        this.SwipedTabsSlider.getActiveIndex().then(function (i) {
            if (_this.ntabs > i) { // this condition is to avoid passing to incorrect index
                _this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (i * 100) + '%,0,0)';
            }
        });
    };
    /* El método que anima la "rayita" mientras nos estamos deslizando por el slide*/
    ListasPage.prototype.animateIndicator = function (e) {
        //console.log(e.target.swiper.progress);
        if (this.SwipedTabsIndicator) {
            this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' +
                ((e.target.swiper.progress * (this.ntabs - 1)) * 100) + '%,0,0)';
        }
    };
    /*
    metodos para actualizar por el refreser
    */
    ListasPage.prototype.updateCom = function (event) {
    };
    ListasPage.prototype.updateChi = function (event) {
    };
    ListasPage.prototype.updateCor = function (event) {
    };
    ListasPage.prototype.updateCua = function (event) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('SwipedTabsSlider'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSlides"])
    ], ListasPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('infiniteScroll'),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"])
    ], ListasPage.prototype, "ionInfiniteScroll", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dynamicList'),
        __metadata("design:type", Object)
    ], ListasPage.prototype, "dynamicList", void 0);
    ListasPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listas',
            template: __webpack_require__(/*! ./listas.page.html */ "./src/app/listas/listas.page.html"),
            styles: [__webpack_require__(/*! ./listas.page.scss */ "./src/app/listas/listas.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _services_cloud_service_service__WEBPACK_IMPORTED_MODULE_3__["CloudServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], ListasPage);
    return ListasPage;
}());



/***/ })

}]);
//# sourceMappingURL=listas-listas-module.js.map