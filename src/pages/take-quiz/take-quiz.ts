import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
//import { ResultPage } from "../result/result";
import { DataProvider } from "../../providers/data/data";
import { ExamQuestPage } from "../exam-quest/exam-quest";
/* model for quiz data */
import { SubData } from "../../model/subData";
@Component({
  selector: "page-take-quiz",
  templateUrl: "take-quiz.html"
})
export class TakeQuizPage {
  // counter = 0;
  // ans = [];
  // result;
  subQuizdata: SubData;
  subjects = [];
  question = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider
  ) {}

  ionViewDidLoad() {}

  examQuiz(index) {
    // alert(this.subjects[index].subName)
    // console.log(this.subjects[index].subQuestions);
    if (this.subjects[index].subQuestions) {
      this.navCtrl.push(ExamQuestPage, {
        exam: {
          question: this.subjects[index].subQuestions,
          sub: this.subjects[index].subName
        }
      });
    } else {
      this.navCtrl.push(ExamQuestPage);
    }
  }

  ionViewWillEnter() {
    this.data.getCustomQuiz().then(sub => {
      if (sub) {
        for (let s in sub) {
          // if (sub[s].subQuestions) {
          this.subQuizdata = {
            subName: sub[s].subName,
            subDesc: sub[s].subDesc,
            subQuestions: sub[s].subQuestions
          };
          this.subjects.push(this.subQuizdata);

          // }
        }
      }
    });
  }

  ionViewDidLeave() {
    this.subjects.splice(0, this.subjects.length);
  }
}
