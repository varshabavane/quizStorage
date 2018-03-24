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
  test;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public data: DataProvider

  ) { }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ShowQuizPage");
    console.log(this.navParams.get("sub"));

  }

  ionViewWillEnter() {
    this.data.getCustomQuiz().then(a => {
      if (a) {
        this.test = a;
        console.log("local data: " + this.test);
        //this.questions.push(this.test.d.questions);
        //console.log(this.questions)
       
      }
    });
  }

  addQuest() {
    let addModal = this.modalCtrl.create(QuestionsPage);
    addModal.onDidDismiss(Quest => {
      if (Quest) {
        this.questions.push(Quest);

        this.data.getCustomQuiz().then(a => {
          this.test = a;
          console.log("local data: " + this.test)
        });
      }
    });
    addModal.present();
  }
  saveQuiz() {
    // this.questions.push(this.questions);
    // alert("submit button workssuccefully")
    this.subjectName = this.navParams.get("sub").subName;
    let subQuiz = {
      [this.subjectName]: {
        subName: this.navParams.get("sub").subName,
        subDesc: this.navParams.get("sub").description,
        questions: this.questions
      }
    };

    this.data.saveCustomQuiz(subQuiz);
  }


}
