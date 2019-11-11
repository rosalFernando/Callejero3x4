var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, route, router) {
        this.navCtrl = navCtrl;
        this.route = route;
        this.router = router;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.irAuth();
        }, 3000);
    };
    HomePage.prototype.irAuth = function () {
        this.router.navigate(['autenticacion']);
        console.log("dentro autenticacion");
    };
    HomePage = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        __metadata("design:paramtypes", [NavController,
            ActivatedRoute,
            Router])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map