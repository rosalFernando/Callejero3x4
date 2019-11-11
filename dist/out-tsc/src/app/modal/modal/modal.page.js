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
import { Component } from '@angular/core';
import { NavParams, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CloudServiceService } from 'src/app/services/cloud-service.service';
import { MapaPage } from '../mapa/mapa.page';
var ModalPage = /** @class */ (function () {
    function ModalPage(modalCon, cloud, router, loadingContr, navPar, modalCont) {
        //comprobar en oninit
        this.modalCon = modalCon;
        this.cloud = cloud;
        this.router = router;
        this.loadingContr = loadingContr;
        this.navPar = navPar;
        this.modalCont = modalCont;
        this.listado = [];
        this.listadoPanel = [];
        this.horario = [];
        this.agrupList = [];
    }
    ModalPage.prototype.ngOnInit = function () {
        this.nombre = this.navPar.get('nombre');
        this.key = this.navPar.get('key');
        this.origen = this.navPar.get('origen');
        this.tipo = this.navPar.get('tipo');
        this.director = this.navPar.get('director');
        this.horario = this.navPar.get('horario');
    };
    ModalPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingContr.create({
                                message: 'Espere...'
                            })];
                    case 1:
                        _a.myloading = _b.sent();
                        return [4 /*yield*/, this.myloading.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ModalPage.prototype.cerrar = function () {
        this.modalCon.dismiss();
    };
    ModalPage.prototype.mostrarUbi = function (ubicacionnombre, ubicacionpos) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCont.create({
                            component: MapaPage,
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
    ModalPage = __decorate([
        Component({
            selector: 'app-modal',
            templateUrl: './modal.page.html',
            styleUrls: ['./modal.page.scss'],
        }),
        __metadata("design:paramtypes", [ModalController,
            CloudServiceService,
            Router,
            LoadingController,
            NavParams,
            ModalController])
    ], ModalPage);
    return ModalPage;
}());
export { ModalPage };
//# sourceMappingURL=modal.page.js.map