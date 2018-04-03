import { Component } from "@angular/core";
import {
  NavController,
  PopoverController,
  AlertController
} from "ionic-angular";
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

import { ResultHistoryPage } from "../result-history/result-history";
@Component({
  selector: "page-popoverOptn",
  template: `
  <ion-list>
      <button ion-item (click)="showHistory()">show History</button>
      <button ion-item (click)="deleteHistory()">delete History</button>
  </ion-list>
  `
})
export class PopoverPage {
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  showHistory() {
    this.navCtrl.push(ResultHistoryPage);
  }
  deleteHistory() {
    let deleteAlert = this.alertCtrl.create({
      title: "Do you want to delete your result History ? plz type 'yes'",
      inputs: [
        {
          name: "key",
          placeholder: "yes"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "confirm",
          handler: result => {
            console.log("result" + JSON.stringify(result));
            if (result.key=== "yes") {
              console.log("lo");
            }
            this.viewCtrl.dismiss();
            // if (User.isValid(data.username, data.password)) {
            //   // logged in!
            // } else {
            //   // invalid login
            //   return false;

            // }
          }
        }
      ]
    });
    deleteAlert.present();
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
