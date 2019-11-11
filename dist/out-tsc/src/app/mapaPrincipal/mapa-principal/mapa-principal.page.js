var __assign = (this && this.__assign) || function () {
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { Map, tileLayer, marker } from 'leaflet';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { CloudServiceService } from '../../services/cloud-service.service';
var MapaPrincipalPage = /** @class */ (function () {
    function MapaPrincipalPage(navCtrl, router, cloud, loading) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.cloud = cloud;
        this.loading = loading;
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
        this.icon = L.icon({
            iconUrl: '../../../assets/img/plumas.png',
            iconSize: [38, 60],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76] // point from which the popup should open relative..
        });
        this.map = new Map("map", { center: [37.8915500, -4.7727500] }).setView([37.8915500, -4.7727500], 14);
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 10
        }).addTo(this.map);
        this.cloud.getUbicaciones()
            .then(function (datos) {
            _this.agrupUbi = [];
            datos.forEach(function (doc) {
                _this.agrupUbi.push(__assign({ id: doc.id }, doc.data()));
                marker([doc.data().pos._lat, doc.data().pos._long], { icon: _this.icon }).addTo(_this.map)
                    .bindPopup(doc.data().nombre)
                    .openPopup();
            });
        });
    };
    MapaPrincipalPage.prototype.ionViewWillLeave = function () {
        this.map.remove();
    };
    MapaPrincipalPage.prototype.irListas = function () {
        this.router.navigate(['listas']);
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], MapaPrincipalPage.prototype, "mapContainer", void 0);
    MapaPrincipalPage = __decorate([
        Component({
            selector: 'app-mapa-principal',
            templateUrl: './mapa-principal.page.html',
            styleUrls: ['./mapa-principal.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            Router,
            CloudServiceService,
            LoadingController])
    ], MapaPrincipalPage);
    return MapaPrincipalPage;
}());
export { MapaPrincipalPage };
//# sourceMappingURL=mapa-principal.page.js.map