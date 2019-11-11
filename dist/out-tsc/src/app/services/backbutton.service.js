var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
var BackbuttonService = /** @class */ (function () {
    function BackbuttonService(platform, navCtrl, router) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.router = router;
        this.currentURL = "";
        this.haspressB = false;
        this.openModal = false;
        this.exitB = this.platform.backButton;
        this.exitB.subscribe(function () {
            if (!_this.openModal) {
                if (_this.currentURL == "/" || _this.currentURL == "" || _this.currentURL == "/home")
                    /*En caso de estar en la pestaña home si se pulsa atrás se cierra la aplicación*/
                    navigator['app'].exitApp();
            }
            else {
                _this.haspressB = true;
            }
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof NavigationEnd) { //es lanzado cuando se termina de navegar
                _this.currentURL = event.url;
                if (_this.haspressB) { //Si se pulsó atrás
                    if (_this.currentURL == "/modal") {
                        _this.navCtrl.navigateRoot(['/listas'], { animationDirection: "back" });
                        if (_this.currentURL == "/listas") {
                            _this.navCtrl.navigateRoot(['/mapa-principal'], { animationDirection: "back" });
                        }
                        if (_this.navCtrl.navigateRoot(['/mapa-principal'])) {
                            navigator['app'].exitApp();
                        }
                    }
                    else {
                        _this.navCtrl.navigateRoot(['/'], { animationDirection: "back" });
                    }
                }
            }
        });
    }
    BackbuttonService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Platform,
            NavController,
            Router])
    ], BackbuttonService);
    return BackbuttonService;
}());
export { BackbuttonService };
//# sourceMappingURL=backbutton.service.js.map