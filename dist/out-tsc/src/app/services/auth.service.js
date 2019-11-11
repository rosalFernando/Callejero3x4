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
import * as firebase from 'firebase/app';
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.registerUser = function (value) {
        return new Promise(function (resolve, reject) {
            firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginUser = function (value) {
        return new Promise(function (resolve, reject) {
            firebase.auth().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.logoutUser = function () {
        return new Promise(function (resolve, reject) {
            if (firebase.auth().currentUser) {
                firebase.auth().signOut()
                    .then(function () {
                    resolve();
                }).catch(function (error) {
                    reject();
                });
            }
        });
    };
    AuthService.prototype.userDetails = function () {
        return firebase.auth().currentUser;
    };
    AuthService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map