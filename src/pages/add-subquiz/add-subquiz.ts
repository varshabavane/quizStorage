import { Component } from "@angular/core";
import {
  NavController,
  NavParams,
  ViewController,
  AlertController
} from "ionic-angular";

@Component({
  selector: "page-add-subquiz",
  templateUrl: "add-subquiz.html"
})
export class AddSubquizPage {
  subName;
  subDesc;
  description;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    public alertCtrl: AlertController
  ) {}
  ionViewDidEnter(){
    if(this.navParams.get('subject')){
      this.subName=this.navParams.get('subject').subName;
      this.subDesc=this.navParams.get('subject').subDesc;
    }

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddSubquizPage");
  }

  createSubject() {
    if ((this.subName, this.description)) {
      let subDetails = {
        subName: this.subName,
        subDesc: this.description
      };
      this.view.dismiss(subDetails);
    } else {
      let alert = this.alertCtrl.create({
        title: "Empty String",
        subTitle: "Please fill out the details in form",
        buttons: ["OK"]
      });
      return alert.present();
    }
  }
  //close function added to closing subquizmodule.
  close(){
    this.view.dismiss()
  }
}
