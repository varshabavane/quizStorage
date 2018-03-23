import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
//import { QuestionsPage } from "../questions/questions";
import { TakeQuizPage } from "../take-quiz/take-quiz";
import { DataProvider } from "../../providers/data/data";
import { AddSubquizPage } from "../add-subquiz/add-subquiz";
import { ShowQuizPage } from "../show-quiz/show-quiz";

@Component({
  selector: "page-create-quiz",
  templateUrl: "create-quiz.html"
})
export class CreateQuizPage {
  subjects = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public data: DataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreateQuizPage");
  }
  addSub() {
    let addSubModal = this.modalCtrl.create(AddSubquizPage);
    addSubModal.onDidDismiss(sub => {
      if (sub) {
        this.saveQuiz(sub);
      }
    });
    addSubModal.present();
  }

  saveQuiz(subject) {
    this.subjects.push(subject);
  }
  takeQuiz() {
    this.navCtrl.push(TakeQuizPage);
  }
  showQuiz(i) {
    this.navCtrl.push(ShowQuizPage, {sub: this.subjects[i]});
  }
}
