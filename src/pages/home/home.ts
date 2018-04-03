import { Component } from "@angular/core";
import { NavController, PopoverController } from "ionic-angular";
import { HtmlPage } from "../html/html";
import { JavaPage } from "../java/java";
import { CssPage } from "../css/css";
import { JavascriptPage } from "../javascript/javascript";
import { ResultPage } from "../result/result";
import { CustomQuizPage } from "../custom-quiz/custom-quiz";
// import { ResultHistoryPage } from "../result-history/result-history";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController
  ) {}

  presentPopover($event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    let ev = {
      target: {
        getBoundingClientRect: () => {
          top: "100";
        }
      }
    };
    popover.present({
      ev
    });
  }

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

  subCustom() {
    this.navCtrl.push(CustomQuizPage);
  }
}

/* popover page */

import { ViewController } from "ionic-angular";
import { ShowQuizPage } from "../show-quiz/show-quiz";
import { ResultHistoryPage } from "../result-history/result-history";
@Component({
  selector: "page-popoverOptn",
  template: `
  <ion-list>
      <ion-list-header>Ionic</ion-list-header>
      <button ion-item (click)="showHistory()">show History</button>
      <button ion-item (click)="deleteHistory()">delete History</button>
        </ion-list>
  `
})
export class PopoverPage {
  constructor(public viewCtrl: ViewController, public navCtrl:NavController) {}

  showHistory(){
    this.navCtrl.push(ResultHistoryPage)
  
  }
  deleteHistory(){
    alert('hello')
  }


  close() {
    this.viewCtrl.dismiss();
  }
}
