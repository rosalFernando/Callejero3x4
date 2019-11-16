(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mapaPrincipal-mapa-principal-mapa-principal-module"],{

/***/ "./src/app/mapaPrincipal/mapa-principal/mapa-principal.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mapaPrincipal/mapa-principal/mapa-principal.module.ts ***!
  \***********************************************************************/
/*! exports provided: MapaPrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPrincipalPageModule", function() { return MapaPrincipalPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mapa_principal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapa-principal.page */ "./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _mapa_principal_page__WEBPACK_IMPORTED_MODULE_5__["MapaPrincipalPage"]
    }
];
var MapaPrincipalPageModule = /** @class */ (function () {
    function MapaPrincipalPageModule() {
    }
    MapaPrincipalPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_mapa_principal_page__WEBPACK_IMPORTED_MODULE_5__["MapaPrincipalPage"]]
        })
    ], MapaPrincipalPageModule);
    return MapaPrincipalPageModule;
}());



/***/ }),

/***/ "./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <link rel=\"stylesheet\" href=\"https://unpkg.com/leaflet@1.4.0/dist/leaflet.css\"\r\n  integrity=\"sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==\"\r\n  crossorigin=\"\"/>\r\n <!--\r\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximumscale=1.0, user-scalable=no\" />\r\n -->\r\n\r\n  \r\n</ion-header>\r\n<ion-content>\r\n\r\n\r\n    <div id=\"map\" #map style=\"width:100%;height:100%\"></div>\r\n \r\n    <ion-fab  vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n     \r\n          <img src=\"../../assets/img/puertas.png\" style=\"width:60px;margin:0px;background-color: purple\" (click)=\"irListas()\">\r\n    \r\n    </ion-fab>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcGFQcmluY2lwYWwvbWFwYS1wcmluY2lwYWwvbWFwYS1wcmluY2lwYWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.ts ***!
  \*********************************************************************/
/*! exports provided: MapaPrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaPrincipalPage", function() { return MapaPrincipalPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cloud_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cloud-service.service */ "./src/app/services/cloud-service.service.ts");
/* harmony import */ var src_app_modal_mapa_mapa_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modal/mapa/mapa.page */ "./src/app/modal/mapa/mapa.page.ts");
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







var MapaPrincipalPage = /** @class */ (function () {
    function MapaPrincipalPage(navCtrl, router, cloud, loading, modalCont) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.cloud = cloud;
        this.loading = loading;
        this.modalCont = modalCont;
        this.agrupList = [];
        this.agrupUbi = [];
    }
    /**
      * Metodo que se implementa al iniciar la ventana.
      * Dentro llama al metodo loadmap().
      */
    MapaPrincipalPage.prototype.presentLoading = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var myloading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.create({
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
    MapaPrincipalPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.presentLoading("Cargando mapa");
        setTimeout(function () {
            _this.loadmap();
            _this.loading.dismiss();
        }, 1000);
    };
    /**
     * Metodo que carga un mapa con unas coordenadas predifinidas.
     */
    MapaPrincipalPage.prototype.loadmap = function () {
        var _this = this;
        this.icon = leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"]({
            iconUrl: '../../../assets/img/plumas.png',
            iconSize: [38, 60],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76] // point from which the popup should open relative..
        });
        this.map = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Map"]("map", { center: [37.8915500, -4.7727500] }).setView([37.8915500, -4.7727500], 14);
        Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 10
        }).addTo(this.map);
        this.cloud.getUbicaciones()
            .then(function (datos) {
            _this.agrupUbi = [];
            datos.forEach(function (doc) {
                _this.agrupUbi.push(__assign({ id: doc.id }, doc.data()));
                Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])([doc.data().pos._lat, doc.data().pos._long], { icon: _this.icon }).addTo(_this.map)
                    .bindPopup(doc.data().nombre)
                    .openPopup();
            });
        });
    };
    MapaPrincipalPage.prototype.ionViewWillLeave = function () {
        this.map.remove();
    };
    MapaPrincipalPage.prototype.mostrarUbi = function (ubicacionnombre, ubicacionpos) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCont.create({
                            component: src_app_modal_mapa_mapa_page__WEBPACK_IMPORTED_MODULE_5__["MapaPage"],
                            cssClass: 'mapa',
                            componentProps: {
                                ubicacionnombre: ubicacionnombre,
                                ubicacionpos: ubicacionpos
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
    MapaPrincipalPage.prototype.irListas = function () {
        this.router.navigate(['listas']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapaPrincipalPage.prototype, "mapContainer", void 0);
    MapaPrincipalPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mapa-principal',
            template: __webpack_require__(/*! ./mapa-principal.page.html */ "./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.html"),
            styles: [__webpack_require__(/*! ./mapa-principal.page.scss */ "./src/app/mapaPrincipal/mapa-principal/mapa-principal.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_cloud_service_service__WEBPACK_IMPORTED_MODULE_4__["CloudServiceService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]])
    ], MapaPrincipalPage);
    return MapaPrincipalPage;
}());



/***/ })

}]);
//# sourceMappingURL=mapaPrincipal-mapa-principal-mapa-principal-module.js.map