import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
import { ResultPage } from "../result/result";
@Component({
  selector: "page-exam-quest",
  templateUrl: "exam-quest.html"
})
export class ExamQuestPage {
  question = [];
  subject;
  counter = 0;
  ans = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider
  ) {}

  ionViewWillEnter() {
    console.log("ionViewDidLoad ExamQuestPage");
    if (this.navParams.get("exam")) {
      // console.log(this.navParams.get("question"));
      this.question = this.navParams.get("exam").question;
      this.subject = this.navParams.get("exam").sub;

      console.log(this.question);
    }
  }
  submit() {
    this.data.saveResult("result", {
      result: {
        sub: this.subject,
        marks: this.counter
      }
    });

    this.navCtrl.push(ResultPage);
  }

  ansChck(a, i) {
    if (a === this.question[i].ans) {
      if (this.ans.indexOf(a) === -1) {
        this.ans.push(a);
        this.counter = this.counter + 1;
        console.log(this.counter);
      }
    } else {
      this.counter = this.counter;
      console.log(this.counter);
    }
  }
}
