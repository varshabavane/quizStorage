import { Component } from "@angular/core";
import { NavController, NavParams, ModalController,ViewController } from "ionic-angular";
import { QuestionsPage } from "../questions/questions";
import { DataProvider } from "../../providers/data/data";

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
    public view:ViewController
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
    // this.questions.push(this.questions);
   this.view.dismiss(this.questions)
  }
  close(){
    this.view.dismiss()
  }
}
