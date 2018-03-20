import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { QuestionsPage } from "../questions/questions"; 
import {TakeQuizPage} from "../take-quiz/take-quiz"



@Component({
  selector: "page-create-quiz",
  templateUrl: "create-quiz.html"
})
export class CreateQuizPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreateQuizPage");
  }
  addQuiz(){
    let addModal=this.modalCtrl.create(QuestionsPage);
    addModal.present();
  }
  takeQuiz(){
    this.navCtrl.push(TakeQuizPage)
  }
 
}
