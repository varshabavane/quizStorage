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
  subMarks;
  customMarks = {
    subName: '',
    mark: Number
  }; /* for custom subject marks */

  @ViewChild(Navbar) navBar: Navbar;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider
  ) { }

  ionViewDidEnter() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.popToRoot();
    };
  }
  ionViewWillEnter() {
    this.dataProvider.getResult("htmlMarks").then(x => {
      if (x) {
        this.html = x;
        console.log(x);
      }
    });
    this.dataProvider.getResult("javaMarks").then(x => {
      if(x){
        this.java = x;
        console.log(x);
      }
     
    });
    this.dataProvider.getResult('jsMarks').then(x => {
      if(x){
        this.javascript = x;
      }
     

    });
    this.dataProvider.getResult('cssMarks').then(x => {
      if(x){
        this.css = x;
      }
     
    });

    // console.log(this.dataProvider.getResult("result"))
    //  this.dataProvider.getResult('Marks').then(x=>{
    //   this.subMarks = x;
    // })
    /* For Custom Marks */
    this.customMarks.subName = this.navParams.get('marks').subName;
    this.customMarks.mark = this.navParams.get('marks').mark

  }

  clearResult(subName) {
    this.dataProvider.clearResultData(subName);
    this.dataProvider.getResult(subName).then(x => {
      this.html = x;
      console.log(x);
    });
  }
}
