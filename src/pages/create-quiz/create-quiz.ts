import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
//import { QuestionsPage } from "../questions/questions";
import { TakeQuizPage } from "../take-quiz/take-quiz";
import { DataProvider } from "../../providers/data/data";
import { AddSubquizPage } from "../add-subquiz/add-subquiz";
import { ShowQuizPage } from "../show-quiz/show-quiz";
import { SubData } from "../../model/subData";

@Component({
  selector: "page-create-quiz",
  templateUrl: "create-quiz.html"
})
export class CreateQuizPage {
  subjects = [];
  subQuizdata: SubData;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public data: DataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreateQuizPage");
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

  addSub() {
    let addSubModal = this.modalCtrl.create(AddSubquizPage);
    addSubModal.onDidDismiss(sub => {
      this.subQuizdata = {
        subName: sub.subName,
        subDesc: sub.subDesc,
        subQuestions: []
      };
      this.saveQuiz(this.subQuizdata);
    });
    addSubModal.present();
  }

  saveQuiz(subject) {
    this.subjects.push(subject);
    this.data.saveCustomQuiz(this.subjects);
  }
  takeQuiz() {
    this.navCtrl.push(TakeQuizPage);
  }
  showQuiz(sub, i) {
    let showModel = this.modalCtrl.create(ShowQuizPage, {
      quiz: {
        sub: sub.subName,
        dsc: sub.subDesc,
        questions: sub.subQuestions
      }
    });
    //this.navCtrl.push(ShowQuizPage, { sub: this.subjects[i] });
    showModel.onDidDismiss(data => {
      if (data) {
        this.subjects[i].subQuestions = data;
        this.data.saveCustomQuiz(this.subjects);
      }
    });
    showModel.present();
  }
}
