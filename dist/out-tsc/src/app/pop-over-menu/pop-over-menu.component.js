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
import { Events, NavParams, PopoverController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
var PopOverMenuComponent = /** @class */ (function () {
    function PopOverMenuComponent(events, navParams, popoverController, auth, router) {
        this.events = events;
        this.navParams = navParams;
        this.popoverController = popoverController;
        this.auth = auth;
        this.router = router;
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
    PopOverMenuComponent = __decorate([
        Component({
            selector: 'app-pop-over-menu',
            templateUrl: './pop-over-menu.component.html',
            styleUrls: ['./pop-over-menu.component.scss']
        }),
        __metadata("design:paramtypes", [Events,
            NavParams,
            PopoverController,
            AuthService,
            Router])
    ], PopOverMenuComponent);
    return PopOverMenuComponent;
}());
export { PopOverMenuComponent };
//# sourceMappingURL=pop-over-menu.component.js.map