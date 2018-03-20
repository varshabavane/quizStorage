import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { CreateQuizPage } from "../create-quiz/create-quiz";


@Component({
  selector: "page-custom-quiz",
  templateUrl: "custom-quiz.html"
})
export class CustomQuizPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad CustomQuizPage");
  }
  createQuiz() {
    this.navCtrl.push(CreateQuizPage);
  }
}
