import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ModalController,
  ViewController,
  AlertController
} from "ionic-angular";
import { QuestionsPage } from "../questions/questions";
import { DataProvider } from "../../providers/data/data";
import { TakeQuizPage } from "../take-quiz/take-quiz";

@Component({
  selector: "page-show-quiz",
  templateUrl: "show-quiz.html"
})
export class ShowQuizPage {
  questions = [];
  subjectName;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public data: DataProvider,
    public view: ViewController,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShowQuizPage");
    console.log(this.navParams.get("sub"));
  }

  ionViewWillEnter() {
    this.questions = this.navParams.get("quiz").questions;
    // this.data.getCustomQuiz().then(a => {
    //   if (a) {
    //     this.test = a;
    //     console.log("local data: " + this.test);
    //     //this.questions.push(this.test.d.questions);
    //     //console.log(this.questions)

    //   }
    // });
  }

  addQuest() {
    let addModal = this.modalCtrl.create(QuestionsPage);
    addModal.onDidDismiss(Quest => {
      if (Quest) {
        this.questions.push(Quest);
      }
    });
    addModal.present();
  }

  saveQuiz() {
    this.view.dismiss(this.questions);
  }

  submit() {
    this.navCtrl.push(TakeQuizPage);
  }
  editQ(i) {
    let addModal = this.modalCtrl.create(QuestionsPage, {
      question: this.questions[i]
    });
    addModal.onDidDismiss(Quest => {
      if (Quest) {
        this.questions[i].question = Quest.question;
        this.questions[i].optionA = Quest.optionA;
        this.questions[i].optionB = Quest.optionB;
        this.questions[i].optionC = Quest.optionC;
        this.questions[i].optionD = Quest.optionD;
        this.questions[i].ans = Quest.ans;
      }
    });
    addModal.present();
  }

  deleteQ(i) {
    let confirm = this.alertCtrl.create({
      title: "Do you want to Delete this question",
      message: this.questions[i].question,
      buttons: [
        {
          text: "No",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Yes",
          handler: () => {
            console.log("Agree clicked");
            this.questions.splice(i,1)
          }
        }
      ]
    });
    confirm.present();
  }

  close() {
    this.view.dismiss();
  }
}
