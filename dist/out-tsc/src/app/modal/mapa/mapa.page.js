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
import 'leaflet-routing-machine';
import { NavController, ModalController, NavParams, LoadingController } from '@ionic/angular';
import 'leaflet-routing-machine';
import { tileLayer, marker, } from 'leaflet';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { CloudServiceService } from '../../services/cloud-service.service';
var MapaPage = /** @class */ (function () {
    function MapaPage(navCtrl, router, cloud, modalCon, navPar, loading) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.cloud = cloud;
        this.modalCon = modalCon;
        this.navPar = navPar;
        this.loading = loading;
        this.ubicacionpos = [];
        this.listaPos = [];
        this.ubicacionnombre = this.navPar.get('ubicacionnombre');
        this.ubicacionpos = this.navPar.get('ubicacionpos');
        this.lat = this.navPar.get('ubicacionpos')._lat;
        this.long = this.navPar.get('ubicacionpos')._long;
        console.log(this.lat);
    }
    MapaPage.prototype.presentLoading = function (msg) {
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
    MapaPage.prototype.ionViewDidEnter = function () {
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
    MapaPage.prototype.loadmap = function () {
        console.log("Cargando mapa...");
        this.icon = L.icon({
            iconUrl: '../../../assets/img/plumas.png',
            iconSize: [38, 60],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76] // point from which the popup should open relative..
        });
        this.map = new L.Map("map2", { center: [this.lat, this.long] }).setView([this.lat, this.long], 14);
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            minZoom: 10,
        }).addTo(this.map);
        L.Routing.control({
            router: L.Routing.osrmv1({
                serviceUrl: "http://router.project-osrm.org/route/v1/"
            }),
            showAlternatives: true,
            lineOptions: { styles: [{ color: '#242c81', weight: 7 }] },
            fitSelectedRoutes: false,
            altLineOptions: { styles: [{ color: '#ed6852', weight: 7 }] },
            show: false,
            routeWhileDragging: true,
            waypoints: [
                L.latLng(this.lat, this.long),
                L.latLng(37.8833, -4.7667)
            ]
        }).addTo(this.map);
        marker([this.lat, this.long], { icon: this.icon }).addTo(this.map)
            .bindPopup(this.ubicacionnombre)
            .openPopup();
    };
    MapaPage.prototype.ionViewWillLeave = function () {
        this.map.remove();
    };
    __decorate([
        ViewChild('map2'),
        __metadata("design:type", ElementRef)
    ], MapaPage.prototype, "mapContainer", void 0);
    MapaPage = __decorate([
        Component({
            selector: 'app-mapa',
            templateUrl: './mapa.page.html',
            styleUrls: ['./mapa.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            Router,
            CloudServiceService,
            ModalController,
            NavParams,
            LoadingController])
    ], MapaPage);
    return MapaPage;
}());
export { MapaPage };
//# sourceMappingURL=mapa.page.js.map