import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { CreateQuizPage } from "../create-quiz/create-quiz";
import { TakeQuizPage } from "../take-quiz/take-quiz";


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
  takeQuiz(){
    this.navCtrl.push(TakeQuizPage);
  }
}
