import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
@Component({
  selector: "page-exam-quest",
  templateUrl: "exam-quest.html"
})
export class ExamQuestPage {
  question = []
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidEnter() {
    console.log("ionViewDidLoad ExamQuestPage");
    if (this.navParams.get("question")) {
      // console.log(this.navParams.get("question"));
      this.question = this.navParams.get("question")
      console.log(this.question)
    }
  }



}
