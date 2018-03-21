import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { QuestionsPage } from "../questions/questions";
import { TakeQuizPage } from "../take-quiz/take-quiz";
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-create-quiz",
  templateUrl: "create-quiz.html"
})
export class CreateQuizPage {
  questions = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public data: DataProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreateQuizPage");
  }
  addQuiz() {
    let addModal = this.modalCtrl.create(QuestionsPage);
    addModal.onDidDismiss(Quest => {
      if (Quest) {
        this.saveQuiz(Quest);
      }
    });
    addModal.present();
  }

  saveQuiz(q) {
    this.questions.push(this.questions);
    //this.data.save(this.questions)
  }
  takeQuiz() {
    this.navCtrl.push(TakeQuizPage);
  }
}
