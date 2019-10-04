import { Component, OnInit } from '@angular/core';
import { Events, NavParams, PopoverController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-over-menu',
  templateUrl: './pop-over-menu.component.html',
  styleUrls: ['./pop-over-menu.component.scss']
})
export class PopOverMenuComponent implements OnInit {
  page: any;

  constructor(private events: Events,
    private navParams: NavParams,
    private popoverController: PopoverController,
    private auth: AuthService,
    private router: Router ) { }

  ngOnInit() {
    //Get data from popover page
   // this.page = this.navParams.get('data');
  }

  

  logout() {
  // code for logout
  this.auth.logoutUser();
  this.popoverController.dismiss();
  this.router.navigate(['autenticacion']);
 
  
  }

  

}
