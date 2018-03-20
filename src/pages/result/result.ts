import { Component } from "@angular/core";
import { NavController, NavParams, Navbar } from "ionic-angular";
import { ViewChild } from "@angular/core";
/* import for fetching values from localStorage */
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-result",
  templateUrl: "result.html"
})
export class ResultPage {
  // result;
  html;
  java;
  javascript;
  css;

  @ViewChild(Navbar) navBar: Navbar;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider
  ) {}

  ionViewDidEnter() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.popToRoot();
    };
  }
  ionViewWillEnter() {
    this.dataProvider.getResult("htmlMarks").then(x => {
      this.html = x;
      console.log(x);
    });
    this.dataProvider.getResult("javaMarks").then(x => {
      this.java = x;
      console.log(x);
    });
    this.dataProvider.getResult('jsMarks').then(x=> {
      this.javascript = x;
      
    });
    this.dataProvider.getResult('cssMarks').then(x=>{
      this.css = x;
    })
  }

  clearResult(subName){
    this.dataProvider.clearResultData(subName);
    this.dataProvider.getResult(subName).then(x => {
      this.html = x;
      console.log(x);
    });
  }
}
