import { Component } from "@angular/core";
import { NavController, NavParams, ModalController } from "ionic-angular";
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
    public data: DataProvider
    
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShowQuizPage");
    console.log(this.navParams.get("sub"));
    // this.subjectName = this.navParams.get('sub').subName
    // this.SubQuiz
    // console.log(this.SubQuiz)
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
    alert("submit button workssuccefully")
    this.subjectName = this.navParams.get("sub").subName;
    let subQuiz = {
      [this.subjectName]: {
        subName: this.navParams.get("sub").subName,
        subDesc: this.navParams.get("sub").description,
        questions: [this.questions]
      }
    };

    this.data.saveCustomQuiz(subQuiz);
  }

  
}
