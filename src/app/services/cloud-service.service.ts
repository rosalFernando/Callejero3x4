import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CloudServiceService {

  AgrupCol: AngularFirestoreCollection<any>;
  AgrupUbi: AngularFirestoreCollection<any>;

  lastAgrupLoader=null;
  lastlasAgrupLoader=null;
  scrollAgrupEnable=true;
  isConnected=true;

  constructor(private fireStone: AngularFirestore) {

    this.AgrupCol=fireStone.collection<any>(environment.firebaseConfig.AgrupCollection);
    this.AgrupUbi=fireStone.collection<any>(environment.firebaseConfig.AgrupUbica);


   }

   isInfinityScrollEnabled(){
     return this.scrollAgrupEnable;
   }
   

   getAgrups():Promise<firebase.firestore.QuerySnapshot>{
     return this.AgrupCol.ref.get();

   }
   /**
 * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es comparsa
 * @returns AgrupCollection
 */
  getAgrupsComparsa():Promise<any> {
    return this.AgrupCol.ref.where("tipo","==","Comparsa").get();
  }
  /**
 * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es chirigota
 * @returns AgrupCollection
 */
  getAgrupsChirigota():Promise<any> {
    return this.AgrupCol.ref.where("tipo","==","Chirigota").get();
  }
  /**
 * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es coro
 * @returns AgrupCollection
 */
  getAgrupsCoro():Promise<any> {
    return this.AgrupCol.ref.where("tipo","==","Coro").get();
  }
  /**
 * Metodo de consulta a base de datos que devuelve todos los elementos cuyo tipo es cuarteta
 * @returns AgrupCollection
 */
  getAgrupsCuarteta():Promise<any> {
    return this.AgrupCol.ref.where("tipo","==","Cuarteta").get();
  }

  getUbicaciones():Promise<firebase.firestore.QuerySnapshot>{
    return this.AgrupUbi.ref.get();
    
  }
  getUbiTendillas():Promise<any>{
    return this.AgrupUbi.ref.where("nombre","==","Plaza de las Tendillas").get();
  }
  getUbiCap():Promise<any>{
    return this.AgrupUbi.ref.where("nombre","==","Plaza de Capuchinos").get();
  }
  getUbiMezCat():Promise<any>{
    return this.AgrupUbi.ref.where("nombre","==","Mezquita-Catedral").get();
  }
  getUbiPotro():Promise<any>{
    return this.AgrupUbi.ref.where("nombre","==","Plaza del Potro").get();
  }
  
}
