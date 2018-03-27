import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
// import { ResultPage } from "../result/result";
import { DataProvider } from "../../providers/data/data";
import { ExamQuestPage } from "../exam-quest/exam-quest";
/* model for quiz data */
import {SubData} from "../../model/subData"
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

  // question = [
  //   {
  //     q: "",
  //     A: "",
  //     B: "",
  //     C: "",
  //     D: "",
  //     ans: ""
  //   }
  // ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public data: DataProvider
  ) {}

  ionViewDidLoad() {}

  examQuiz(index) {
    // alert(this.subjects[index].subName)
    if(this.subjects[index].subQuestions){
      this.navCtrl.push(ExamQuestPage, {question: this.subjects[index].subQuestions} );
    }else{
      this.navCtrl.push(ExamQuestPage)
    }
    
  }

  ionViewWillEnter() {
    this.data.getCustomQuiz().then(sub => {
      if (sub) {
        for (let s in sub) {
          this.subQuizdata = {
            subName: sub[s].subName,
            subDesc: sub[s].subDesc,
            subQuestions: sub[s].subQuestions
          };
          this.subjects.push(this.subQuizdata);
        }
      }
    });
  }

  ionViewDidLeave() {
    this.subjects.splice(0, this.subjects.length);
  }

  // submit() {
  //   this.data.saveResult("marks", this.counter);
  //   this.navCtrl.push(ResultPage);
  // }

  // ansChck(a, i) {
  //   if (a === this.question[i].ans) {
  //     if (this.ans.indexOf(a) === -1) {
  //       this.ans.push(a);
  //       this.counter = this.counter + 1;
  //     }
  //   } else {
  //     this.counter = this.counter;
  //   }
  // }
}
