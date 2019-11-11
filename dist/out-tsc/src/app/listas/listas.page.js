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
import { Component, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ModalController, ActionSheetController, ToastController, IonInfiniteScroll, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CloudServiceService } from '../services/cloud-service.service';
import { ModalPage } from '../modal/modal/modal.page';
import { PopOverMenuComponent } from '../pop-over-menu/pop-over-menu.component';
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
                            component: ModalPage,
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
                            component: PopOverMenuComponent,
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
        ViewChild('SwipedTabsSlider'),
        __metadata("design:type", IonSlides)
    ], ListasPage.prototype, "SwipedTabsSlider", void 0);
    __decorate([
        ViewChild('infiniteScroll'),
        __metadata("design:type", IonInfiniteScroll)
    ], ListasPage.prototype, "ionInfiniteScroll", void 0);
    __decorate([
        ViewChild('dynamicList'),
        __metadata("design:type", Object)
    ], ListasPage.prototype, "dynamicList", void 0);
    ListasPage = __decorate([
        Component({
            selector: 'app-listas',
            templateUrl: './listas.page.html',
            styleUrls: ['./listas.page.scss'],
        }),
        __metadata("design:paramtypes", [LoadingController,
            Router,
            ModalController,
            ActionSheetController,
            CloudServiceService,
            ToastController,
            PopoverController])
    ], ListasPage);
    return ListasPage;
}());
export { ListasPage };
//# sourceMappingURL=listas.page.js.map