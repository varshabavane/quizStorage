import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-css',
  templateUrl: 'css.html',
})
export class CssPage {
  counter;
  ans=[];
  question=[
    { 
      q:"1.Which of the following selector selects all elements of E that have the attribute attr that end with the given value?",

      A:" E[attr^=value]",
      B: "E[attr$=value]",
      C:" E[attr*=value]",
      D: "none of the mentioned",
      ans:"E[attr$=value]",
      isDisable:"false",
   },

   { 
     q:" Which of the following selector selects the elements that are checked",
     A:"E ~ F",
     B:"::after",
     C:":checked",
     D:"none of the mentioned",
     ans:":checked",
     isDisable:"false"
    },

   { 
    q:"What is css stands for",
    A:"Color Style Sheets",
    B:"Cascade Sheets Style",
    C:"Cascade Style Sheet",
    D:"Cascading Style Sheets",
    ans:"Cascade Style Sheet",
    isDisable:"false"
   },

  { 
    q:"In css what does h1 can be called as",
    A:"Selector",
    B:"Attribute",
    C:"Value",
    D:"Tag",
    ans:"Selector",
    isDisable:"false"
  },

  { 
    q:"In css what does “color:red” can be called as",
    A:"Selector",
    B:"Rule",
    C:"Declaration",
    D:"None of the above",
    ans:"Declaration",
   
    isDisable:"false",
  },

  { 
    q:" Which of the following attributes is used to specify elements to bind style rules to",
    A:"id",
    B:"class",
    C:"tag",
    D:"both (b) and (c)",
    ans:"id",
    isDisable:"false",
  },

  { 
    q:"In css what does “font-size” can be called as",
    A:"Selector",
    B:"Rule",
    C:" Property",
    D:"Property-Name",
    ans:"Property-Name",
    isDisable:"false",
  },

  { 
    q:"_________ selectors, which are used to specify a group of elements",
    A:"id",
    B:"class",
    C:"tag",
    D:"both (b) and (c)",
    ans:"class",
    isDisable:"false",

  },
  { 
    q:"Which of the following tag is used to embed css in html page",
    A:" <script>",
    B:"<style>",
    C:" <css>",
    D:" <!DOCTYPE html>",
    ans:"<style>",
    isDisable:"false"

  },
  { 
    q:" Is it the best way to include H1 heading only one time in the web page. State true or false.",
    A:"true",
    B:"false",
   
    ans:"true",
    isDisable:"false"

  },
  { 
    q:"__________ implementation that introduced text, list, box, margin, border, color, and background properties.",
    A:"css",
    B:"html",
    C:"javascript",
    D:"ajax",
    ans:"css",
    isDisable:"false"

  }
  ] 


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CssPage');
  }
  anschk(a,i){

    if(a === this.question[i].ans) {
      if(this.ans.indexOf(a) === -1){
        this.ans.push(a);
        this.counter=this.counter + 1;
      }
    }else{
      this.counter= this.counter;
    }
  }

}
