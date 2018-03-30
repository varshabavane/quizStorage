import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DataProvider } from "../../providers/data/data";
import { ResultPage } from "../result/result";
/* Model for result records */
import { ResultData } from '../../model/resultData'
@Component({
  selector: "page-exam-quest",
  templateUrl: "exam-quest.html"
})
export class ExamQuestPage {
  question = [];
  subject;
  counter = 0;
  ans = [];
  result: ResultData;
  marks = []; /* For Storing marks and carry out CRUD operations */
  isDisable = false; /* Boolean to Disable button */


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider
  ) { }

  ionViewWillEnter() {
    console.log("ionViewDidLoad ExamQuestPage");
    if (this.navParams.get("exam")) {
      // console.log(this.navParams.get("question"));
      this.question = this.navParams.get("exam").question;
      this.subject = this.navParams.get("exam").sub;

      console.log(this.question);
    }

    /* Fetch Data from Local Storage */
    this.data.getResult('result').then(record => {
      if (record) {
        for (let r in record) {
          this.result = {
            date: record[r].date,
            marks: record[r].marks,
            subName: record[r].subName
          }
          this.marks.push(this.result)

        }
      }
    })
  }
  submit() {
    this.result = {
      date: new Date(Date.now()),
      marks: this.counter,
      subName: this.subject
    }
    this.marks.push(this.result)
    this.data.saveResult("result", this.marks);
    this.isDisable = true;

    this.navCtrl.push(ResultPage, { marks: { subName: this.subject, mark: this.counter } });
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
