import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router){

  }

  ionViewWillEnter(){
    
setTimeout(()=>{
  this.irAuth();
}, 3000)


    
  }
irAuth(){
  this.router.navigate(['autenticacion']);
  console.log("dentro autenticacion");
}


  
}




