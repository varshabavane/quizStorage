import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultPage } from '../result/result'
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the TakeQuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-take-quiz',
  templateUrl: 'take-quiz.html',
})
export class TakeQuizPage {
  counter=0;
  ans=[];
  result;

  question=[
    {
      q:"",
      A:"",
      B:"",
      C:"",
      D:"",
      ans:"",
    }
  ]



  

  constructor(public navCtrl: NavController, public navParams: NavParams, public saveData:DataProvider) {
  }

  ionViewDidLoad() {
  }

  submit(){
    this.saveData.saveResult("marks", this.counter)
    this.navCtrl.push(ResultPage);

  }

ansChck(a, i) {
  if (a === this.question[i].ans) {
    if (this.ans.indexOf(a) === -1) {
      this.ans.push(a);
      this.counter = this.counter + 1;
    }
  } else {
    this.counter = this.counter;
  }
}
  

}
