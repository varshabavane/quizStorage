import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { HtmlPage } from "../html/html";
import { JavaPage } from "../java/java";
import { CssPage} from "../css/css";
import { JavascriptPage} from "../javascript/javascript"



@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  subject;
  quetion;

  constructor(public navCtrl: NavController) {}

  submit() {
    this.navCtrl.push(HtmlPage);
  }

  subjava() {
    this.navCtrl.push(JavaPage);
    }
    subCss(){
      this.navCtrl.push(CssPage);
    }
    subJS(){
      //this.navCtrl.push(JavascriptPage);
    }
}
