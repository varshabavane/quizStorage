import { Component } from "@angular/core";
import { NavController, NavParams, Navbar,PopoverController } from "ionic-angular";
import { ViewChild } from "@angular/core";
/* import for fetching values from localStorage */
import { DataProvider } from "../../providers/data/data";
import { PopoverPage } from "../home/home";
//import { ResultHistoryPage } from "../result-history/result-history";

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
  // subMarks;

  customMarks = {
    subName: "",
    mark: Number
  };
  /* for custom subject marks */
  @ViewChild(Navbar) navBar: Navbar;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataProvider: DataProvider,
    public popoverCtrl:PopoverController
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
      if (x) {
        this.java = x;
        console.log(x);
      }
    });
    this.dataProvider.getResult("jsMarks").then(x => {
      if (x) {
        this.javascript = x;
      }
    });
    this.dataProvider.getResult("cssMarks").then(x => {
      if (x) {
        this.css = x;
      }
    });

    console.log(this.dataProvider.getResult("result"));

    this.dataProvider.getResult("result").then(x => {
      if (x) {
        console.log(x);
        // this.subMarks = x;

        let rec_Date = new Date(
          Math.max.apply(
            null,
            x.map(d => {
              if (d.date != undefined) {
                return new Date(d.date);
              }
            })
          )
        );
        x.map(a => {
          if (a.date == rec_Date) {
            this.customMarks.mark = a.marks;
            this.customMarks.subName = a.subName;
          }
        });
        // console.log(rec_Date);
      }
    });
    /* For Custom Marks */
    if (this.navParams.get("marks")) {
      this.customMarks.subName = this.navParams.get("marks").subName;
      this.customMarks.mark = this.navParams.get("marks").mark;
    }
  }

  clearResult(subName) {
    this.dataProvider.clearResultData(subName);
    this.dataProvider.getResult(subName).then(x => {
      this.html = x;
      console.log(x);
    });
  }
}
