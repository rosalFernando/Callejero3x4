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
/* harmony import */ var _pop_over_menu_pop_over_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pop-over-menu/pop-over-menu.component */ "./src/app/pop-over-menu/pop-over-menu.component.ts");
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
            entryComponents: [_pop_over_menu_pop_over_menu_component__WEBPACK_IMPORTED_MODULE_6__["PopOverMenuComponent"]],
            declarations: [_listas_page__WEBPACK_IMPORTED_MODULE_5__["ListasPage"], _pop_over_menu_pop_over_menu_component__WEBPACK_IMPORTED_MODULE_6__["PopOverMenuComponent"]]
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

module.exports = "\r\n<ion-header>\r\n    <ion-toolbar color=\"success\" >\r\n        <ion-title color=\"light\" style=\"text-align: center\">Agrupaciones</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button (click)=\"presentPopover($event)\">\r\n            <ion-icon name=\"more\"></ion-icon>\r\n          </ion-button>\r\n\r\n        </ion-buttons>\r\n      \r\n      </ion-toolbar>\r\n\r\n  <ion-segment [(ngModel)]=\"category\" (ionChange)=\"slides.slideTo(category)\"\r\n    style=\"background-color:mediumpurple\" color=\"light\">\r\n    <ion-segment-button layout=\"icon-start\" value=\"0\" style=\"--padding-end:0px;--padding-start:0px\">\r\n\r\n      <ion-label>Comparsa</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button layout=\"icon-start\" value=\"1\" style=\"--padding-end:0px;--padding-start:0px\">\r\n\r\n      <ion-label>Chirigota</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button layout=\"icon-start\" value=\"2\" style=\"--padding-end:0px;--padding-start:0px\">\r\n\r\n      <ion-label>Coro</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button layout=\"icon-start\" value=\"3\" style=\"--padding-end:0px;--padding-start:0px\">\r\n\r\n      <ion-label>Cuarteto</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <div id='indicator' class=\"SwipedTabs-indicatorSegment\" [ngStyle]=\" \r\n  {'width.%': (100/this.tabs.length)}\" style=\"margin-top:2px\"></div>\r\n  \r\n  \r\n  \r\n  \r\n</ion-header>\r\n\r\n<ion-content class=\"fixed-scroll\">\r\n    <ion-slides #slides (ionSlideTransitionStart)=\"updateIndicatorPosition();updateCat(slides.getActiveIndex())\"\r\n    (ionSlideWillChange)=\"updateIndicatorPosition()\" (ionSlideDidChange)=\"updateIndicatorPosition()\" #SwipedTabsSlider\r\n    (ionSlideDrag)=\"animateIndicator($event)\">\r\n    <ion-slide> \r\n      <ion-content >\r\n        <ion-infinite-scroll #infiniteScroll threshold=\"10px\" >\r\n        <ion-list #dynamicList id=\"dynamicList\" >\r\n          <ion-item *ngFor=\"let item of listaAgrupComPanel;let i = index\" >\r\n            <ion-label >\r\n              <h3>{{item.nombre}}</h3>\r\n              <h4>Director: {{item.director}}</h4>\r\n              \r\n            </ion-label>\r\n            <img src=\"../../../assets/img/chir.png\"  slot=\"end\" style=\"width:40px;margin:0px\" (click)=\"mostrarAgrup(item.key,item.nombre,item.director,item.origen,item.tipo,item.horario)\">\r\n          </ion-item>\r\n  \r\n        </ion-list>\r\n      </ion-infinite-scroll>\r\n      </ion-content>\r\n      </ion-slide>\r\n      \r\n     \r\n    <ion-slide>\r\n      <ion-content class=\"fixed-scroll\">\r\n        <ion-infinite-scroll #infiniteScroll threshold=\"10px\">\r\n      <ion-list #dynamicList id=\"dynamicList\">\r\n        <ion-item *ngFor=\"let item of listaAgrupChiPanel;let i = index\">\r\n          <ion-label >\r\n            <h3>{{item.nombre}}</h3>\r\n            <h4>Director: {{item.director}}</h4>\r\n            \r\n          </ion-label>\r\n          <img src=\"../../../assets/img/comp.png\"  slot=\"end\" style=\"width:40px;margin:0px\" (click)=\"mostrarAgrup(item.key,item.nombre,item.director,item.origen,item.tipo,item.horario)\">\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n        </ion-infinite-scroll>\r\n      </ion-content>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <ion-content class=\"fixed-scroll\">\r\n            <ion-infinite-scroll #infiniteScroll threshold=\"10px\">\r\n      <ion-list #dynamicList id=\"dynamicList\">\r\n        <ion-item *ngFor=\"let item of listaAgrupCoroPanel;let i = index\">\r\n          <ion-label >\r\n            <h3>{{item.nombre}}</h3>\r\n            <h4>Director: {{item.director}}</h4>\r\n            \r\n          </ion-label>\r\n          <img src=\"../../../assets/img/cor.png\"  slot=\"end\" style=\"width:40px;margin:0px\" (click)=\"mostrarAgrup(item.key,item.nombre,item.director,item.origen,item.tipo,item.horario)\">\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n            </ion-infinite-scroll>\r\n        </ion-content>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <ion-content class=\"fixed-scroll\">\r\n            <ion-infinite-scroll #infiniteScroll threshold=\"10px\">\r\n      <ion-list #dynamicList id=\"dynamicList\">\r\n        <ion-item *ngFor=\"let item of listaAgrupCuarPanel;let i = index\">\r\n          <ion-label >\r\n            <h3>{{item.nombre}}</h3>\r\n            <h4>Director: {{item.director}}</h4>\r\n            \r\n          </ion-label>\r\n          <img src=\"../../../assets/img/cua.png\"  slot=\"end\" style=\"width:40px;margin:0px\" (click)=\"mostrarAgrup(item.key,item.nombre,item.director,item.origen,item.tipo,item.horario)\">\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n            </ion-infinite-scroll>\r\n        </ion-content>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n</ion-content>\r\n\r\n<ion-footer >\r\n    <ion-toolbar color=\"success\">\r\n      <ion-title color=\"light\" style=\"font-size: 15px; text-align: center\">COAC Córdoba.</ion-title>\r\n    </ion-toolbar>\r\n  </ion-footer>"

/***/ }),

/***/ "./src/app/listas/listas.page.scss":
/*!*****************************************!*\
  !*** ./src/app/listas/listas.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/* la \"rayita\" que indica la navegación entre slides */\n.SwipedTabs-indicatorSegment {\n  transition: 0s all;\n  -webkit-transform-origin: top 0 left 0;\n          transform-origin: top 0 left 0;\n  height: 2px;\n  position: relative;\n  top: -2px;\n  background-color: var(--ion-color-tertiary) !important; }\n.button-native {\n  padding: 0px !important; }\n/* para que el slide ocupe toda la pantalla */\nion-slide.swiper-slide {\n  display: block; }\n.slides {\n  height: 100%; }\n.fixed-scroll {\n  height: 100% !important;\n  overflow-y: scroll;\n  position: relative; }\n.fixed-scroll ::-webkit-scrollbar {\n    display: none !important; }\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGFzL2xpc3Rhcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2xpc3Rhcy9DOlxcaW9uaWNcXGNhbGxlamVybzN4NC9zcmNcXGFwcFxcbGlzdGFzXFxsaXN0YXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQixzREFBQTtBQUNBO0VBSUksa0JBQW1CO0VBQ25CLHNDQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsc0RBQXNELEVBQUE7QUFFMUQ7RUFDSSx1QkFBc0IsRUFBQTtBQUUxQiw2Q0FBQTtBQUNBO0VBQ0ksY0FBYSxFQUFBO0FBRWpCO0VBQ0ksWUFBWSxFQUFBO0FBRWhCO0VBQ0ksdUJBQXFCO0VBQ3JCLGtCQUFpQjtFQUNqQixrQkFBaUIsRUFBQTtBQUhyQjtJQUtRLHdCQUF3QixFQUFBO0FBR2hDOztFQUVFLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpc3Rhcy9saXN0YXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogbGEgXCJyYXlpdGFcIiBxdWUgaW5kaWNhIGxhIG5hdmVnYWNpw7NuIGVudHJlIHNsaWRlcyAqL1xuLlN3aXBlZFRhYnMtaW5kaWNhdG9yU2VnbWVudCB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMHMgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDBzIGFsbDtcbiAgLW8tdHJhbnNpdGlvbjogMHMgYWxsO1xuICB0cmFuc2l0aW9uOiAwcyBhbGw7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCAwIGxlZnQgMDtcbiAgaGVpZ2h0OiAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpICFpbXBvcnRhbnQ7IH1cblxuLmJ1dHRvbi1uYXRpdmUge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDsgfVxuXG4vKiBwYXJhIHF1ZSBlbCBzbGlkZSBvY3VwZSB0b2RhIGxhIHBhbnRhbGxhICovXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLnNsaWRlcyB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uZml4ZWQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5maXhlZC1zY3JvbGwgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cbiIsIi8qIGxhIFwicmF5aXRhXCIgcXVlIGluZGljYSBsYSBuYXZlZ2FjacOzbiBlbnRyZSBzbGlkZXMgKi9cclxuLlN3aXBlZFRhYnMtaW5kaWNhdG9yU2VnbWVudHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMHMgYWxsO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAgMHMgYWxsO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogIDBzIGFsbDtcclxuICAgIHRyYW5zaXRpb246ICAwcyBhbGw7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgMCBsZWZ0IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSkgIWltcG9ydGFudDtcclxufVxyXG4uYnV0dG9uLW5hdGl2ZXtcclxuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogcGFyYSBxdWUgZWwgc2xpZGUgb2N1cGUgdG9kYSBsYSBwYW50YWxsYSAqL1xyXG5pb24tc2xpZGUuc3dpcGVyLXNsaWRlIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLnNsaWRlc3tcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4uZml4ZWQtc2Nyb2xse1xyXG4gICAgaGVpZ2h0OjEwMCUhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

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
/* harmony import */ var _pop_over_menu_pop_over_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pop-over-menu/pop-over-menu.component */ "./src/app/pop-over-menu/pop-over-menu.component.ts");
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
    function ListasPage(loadingController, router, modalCont, actionSheetController, cloud, toast, popoverController) {
        this.loadingController = loadingController;
        this.router = router;
        this.modalCont = modalCont;
        this.actionSheetController = actionSheetController;
        this.cloud = cloud;
        this.toast = toast;
        this.popoverController = popoverController;
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
    ListasPage.prototype.presentPopover = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var popver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _pop_over_menu_pop_over_menu_component__WEBPACK_IMPORTED_MODULE_5__["PopOverMenuComponent"],
                            event: event
                        })];
                    case 1:
                        popver = _a.sent();
                        return [4 /*yield*/, popver.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]])
    ], ListasPage);
    return ListasPage;
}());



/***/ }),

/***/ "./src/app/pop-over-menu/pop-over-menu.component.html":
/*!************************************************************!*\
  !*** ./src/app/pop-over-menu/pop-over-menu.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <ion-list>\r\n    \r\n    <ion-item (click)=\"logout()\">\r\n      Logout\r\n    </ion-item>\r\n    <ion-item (click)=\"irMiscomentarios()\">\r\n      Mis Comentarios\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pop-over-menu/pop-over-menu.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pop-over-menu/pop-over-menu.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcC1vdmVyLW1lbnUvcG9wLW92ZXItbWVudS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pop-over-menu/pop-over-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pop-over-menu/pop-over-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: PopOverMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopOverMenuComponent", function() { return PopOverMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cloud_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cloud-service.service */ "./src/app/services/cloud-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PopOverMenuComponent = /** @class */ (function () {
    function PopOverMenuComponent(events, navParams, popoverController, auth, router, modaCont, cloud, toast) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.auth = auth;
        this.router = router;
        this.modaCont = modaCont;
        this.cloud = cloud;
        this.toast = toast;
        this.listaComentarios = [];
    }
    PopOverMenuComponent.prototype.ngOnInit = function () {
        //Get data from popover page
        // this.page = this.navParams.get('data');
    };
    PopOverMenuComponent.prototype.logout = function () {
        // code for logout
        this.auth.logoutUser();
        this.popoverController.dismiss();
        this.router.navigate(['autenticacion']);
    };
    /*
    crear componente modal.
    */
    PopOverMenuComponent.prototype.irMiscomentarios = function () {
        this.popoverController.dismiss();
        this.router.navigate(['mis-comentarios']);
    };
    PopOverMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pop-over-menu',
            template: __webpack_require__(/*! ./pop-over-menu.component.html */ "./src/app/pop-over-menu/pop-over-menu.component.html"),
            styles: [__webpack_require__(/*! ./pop-over-menu.component.scss */ "./src/app/pop-over-menu/pop-over-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Events"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavParams"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_cloud_service_service__WEBPACK_IMPORTED_MODULE_4__["CloudServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]])
    ], PopOverMenuComponent);
    return PopOverMenuComponent;
}());



/***/ })

}]);
//# sourceMappingURL=listas-listas-module.js.map