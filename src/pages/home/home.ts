import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HtmlPage } from "../html/html";
import { JavaPage } from "../java/java";
import { CssPage } from "../css/css";
import { JavascriptPage } from "../javascript/javascript";
import { ResultPage } from "../result/result";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  subHtml() {
    this.navCtrl.push(HtmlPage);
  }

  subJava() {
    this.navCtrl.push(JavaPage);
  }
  subCss() {
    this.navCtrl.push(CssPage);
  }
  subJs() {
    this.navCtrl.push(JavascriptPage);
  }
  result() {
    this.navCtrl.push(ResultPage);
    
  }

  subCustom(){
    alert("Hello subCustom Works")
  }
}
