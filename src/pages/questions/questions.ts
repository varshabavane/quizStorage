import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { AlertController } from "ionic-angular";
// import { ShowQuizPage } from "../show-quiz/show-quiz";

@Component({
  selector: "page-questions",
  templateUrl: "questions.html"
})
export class QuestionsPage {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  ans: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public view: ViewController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad QuestionsPage");
  }
  saveItem() {
    if (
      (this.question, this.optionA, this.optionB, this.optionC, this.optionD)
    ) {
      let questions = {
        question: this.question,
        optionA: this.optionA,
        optionB: this.optionB,
        optionC: this.optionC,
        optionD: this.optionD,
        ans: this.ans
      };
      this.view.dismiss(questions);
    } else {
      let alert = this.alertCtrl.create({
        title: "Empty String",
        subTitle: "Please fill out the details in form",
        buttons: ["OK"]
      });
      return alert.present();
    }
  }
  
  // showQuiz(){
  //   this.navCtrl.push(ShowQuizPage)
    
  // }
  close(){
    this.view.dismiss()
  }
}
