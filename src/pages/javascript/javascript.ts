import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';



@Component({
  selector: 'page-javascript',
  templateUrl: 'javascript.html',
})
export class JavascriptPage {

  counter=0;
  ans=[];
  question=[
    {
      q:"Javascript is _________ language.",
      A:"application",
      B:"programming",
      C:"scripting",
      D:"none of these",
      ans:"scripting",
      isDisable:"false",
    },

    {
      q:"Why so JavaScript and Java have similar name",
      A:"JavaScript is a stripped-down version of Java",
      B:"JavaScript's syntax is loosely based on Java's",
      C:"They both originated on the island of Java",
      D:"none of these",
      ans:"JavaScript's syntax is loosely based on Java's",
      isDisable:"false",
    },

    {
      q:"When a user views a page containing a JavaScript program which machine actually e!ecutes the script",
      A:"The ser's #achine r$nning a %eb browser",
      B:"The %eb server",
      C:"A central Machine deep within Netscape's corporate accces",
      D:"none of these",
      ans:"The ser's Machine running a web browser",
      isDisable:"false",
    },

    {
      q:"_______JavaScript is also called client-side JavaScript",
      A:"Microsoft",
      B:"Navigator",
      C:"Livewire",
      D:"Native",
      ans:"livewire",
      isDisable:"false",
    },

    {
      q:"Java is a ........... language.",
      A:"weakly typed",
      B:"strogly typed",
      C:"moderate typed",
      D:"None of these",
      ans:"strongly typed",
      isDisable:"false",
    },

    {
      q:"In Java byte, short, int and long all of these are",
      A:"signed",
      B:"unsigned",
      C:"both of the above",
      D:"none of these",
      ans:"signed",
      isDisable:"false",
    },

    {
      q:"Size of int in Java is",
      A:"16 bit",
      B:"32 bit",
      C:"64 bit",
      D:"Depends on execution environment",
      ans:"32 bit",
      isDisable:"false",
    },

    {
      q:"The smallest integer type is ......... and its size is ......... bits.",
      A:"short,8",
      B:"byte, 8",
      C:"short, 16",
      D:"short, 16",
      ans:"byte, 8",
      isDisable:"false",
    },

    {
      q:"System class is defined in ................",
      A:"java.util package",
      B:"java.lang package",
      C:"java.io.package",
      D:"jawa.awt.package",
      ans:"java.lang package",
      isDisable:"false",
    },

    {
      q:"How many primitive data types are there in Java",
      A:"8",
      B:"4",
      C:"9",
      D:"12",
      ans:"8",
      isDisable:"false",
    },

    {
      q:"In java a thread can be created by ..........",
      A:"Extending the thread class.",
      B:"Implementing Runnable interface.",
      C:"Both of the above",
      D:"None of the above",
      ans:"Both of the above",
      isDisable:"false",
    },

    {
      q:"When a class extends the Thread class ,it should override ............ method of Thread class to start that thread.",
      A:"start()",
      B:"run() ",
      C:"int()",
      D:"go()",
      ans:"run()",
      isDisable:"false",
    },

    {
      q:"Select from among the following character escape code which is not available in Java",
      A:"\t",
      B:"\r",
      C:"\a",
      D:"\\",
      ans:"\a",
      isDisable:"false",
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JavascriptPage');
  }
  submit(){
    let alert = this.alertCtrl.create({
      title: 'html',
      subTitle: 'your score is: '+this.counter,
      buttons: ['OK']
    });
    alert.present();

  
    
  }

  ansChck(a, i){
    
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

