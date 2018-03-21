import { Component } from '@angular/core';
import { NavController, NavParams, Modal, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {

 
  questions=[
    {
      q:"",
      A:"",
      B:"",
      C:"",
      D:"",
      ans:"",
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }
   saveItem(){
     this.questions=this.navParams.get('question')

   }

}
