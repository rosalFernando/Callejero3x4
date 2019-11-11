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
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
var CloudServiceService = /** @class */ (function () {
    function CloudServiceService(fireStone) {
        this.fireStone = fireStone;
        this.lastAgrupLoader = null;
        this.lastlasAgrupLoader = null;
        this.scrollAgrupEnable = true;
        this.isConnected = true;
        this.AgrupCol = fireStone.collection(environment.firebaseConfig.AgrupCollection);
        this.AgrupUbi = fireStone.collection(environment.firebaseConfig.AgrupUbica);
    }
    CloudServiceService.prototype.isInfinityScrollEnabled = function () {
        return this.scrollAgrupEnable;
    };
    CloudServiceService.prototype.getAgrups = function () {
        return this.AgrupCol.ref.get();
    };
    /**
  * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es comparsa
  * @returns AgrupCollection
  */
    CloudServiceService.prototype.getAgrupsComparsa = function () {
        return this.AgrupCol.ref.where("tipo", "==", "Comparsa").get();
    };
    /**
   * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es chirigota
   * @returns AgrupCollection
   */
    CloudServiceService.prototype.getAgrupsChirigota = function () {
        return this.AgrupCol.ref.where("tipo", "==", "Chirigota").get();
    };
    /**
   * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es coro
   * @returns AgrupCollection
   */
    CloudServiceService.prototype.getAgrupsCoro = function () {
        return this.AgrupCol.ref.where("tipo", "==", "Coro").get();
    };
    /**
   * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es cuarteta
   * @returns AgrupCollection
   */
    CloudServiceService.prototype.getAgrupsCuarteta = function () {
        return this.AgrupCol.ref.where("tipo", "==", "Cuarteta").get();
    };
    CloudServiceService.prototype.getUbicaciones = function () {
        return this.AgrupUbi.ref.get();
    };
    CloudServiceService.prototype.getUbiTendillas = function () {
        return this.AgrupUbi.ref.where("nombre", "==", "Plaza de las Tendillas").get();
    };
    CloudServiceService.prototype.getUbiCap = function () {
        return this.AgrupUbi.ref.where("nombre", "==", "Plaza de Capuchinos").get();
    };
    CloudServiceService.prototype.getUbiMezCat = function () {
        return this.AgrupUbi.ref.where("nombre", "==", "Mezquita-Catedral").get();
    };
    CloudServiceService.prototype.getUbiPotro = function () {
        return this.AgrupUbi.ref.where("nombre", "==", "Plaza del Potro").get();
    };
    CloudServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [AngularFirestore])
    ], CloudServiceService);
    return CloudServiceService;
}());
export { CloudServiceService };
//# sourceMappingURL=cloud-service.service.js.map