import { Component } from "@angular/core";
import { NavController, NavParams, Navbar } from "ionic-angular";
import { ViewChild } from '@angular/core';

@Component({
  selector: "page-result",
  templateUrl: "result.html"
})
export class ResultPage {
  result;
  html;
  java;
  javascript;
  css;


  @ViewChild(Navbar) navBar: Navbar;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {}

  ionViewDidEnter() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.popToRoot();
    };
  }
  ionViewWillEnter() {
    console.log("marks : " + this.navParams.get("result"));
    this.result = this.navParams.get("result");
  }
}
