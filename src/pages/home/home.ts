import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HtmlPage } from '../html/html';
import {JavaPage }  from '../java/java';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  subject;
  quetion;

  constructor(public navCtrl: NavController) {

  }

  submit(page){

    this.navCtrl.push(page);
    // this.navCtrl.push(HtmlPage);
 
  }

}
