import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { ResultPage } from "../result/result";

/* import for storing data into local storage */
import { DataProvider } from "../../providers/data/data";
@Component({
  selector: "page-java",
  templateUrl: "java.html"
})
export class JavaPage {
  counter = 0;
  ans = [];
  question = [
    {
      q: " Java is a ........... language.",
      A: "weakly type",
      B: "strogly typed",
      C: "moderate typed",
      D: "None of these",
      ans: "strogly typed",
      isDisable: "false"
    },
    {
      q: "How many primitive data types are there in Java",
      A: "6",
      B: "7",
      C: "8",
      D: "9",
      ans: "8",
      isDisable: "false"
    },
    {
      q: "In Java byte, short, int and long all of these are",
      A: "signed",
      B: "unsigned",
      C: "Both of the above",
      D: "None of these",
      ans: "unsigned",
      isDisable: "false"
    },
    {
      q: "Size of int in Java is",
      A: "16 bit",
      B: "32 bit",
      C: "64 bit",
      D: "Depends on execution environment",
      ans: "32-bit",
      isDisable: "false"
    },
    {
      q:
        "The smallest integer type is ......... and its size is ......... bits",
      A: "short, 8",
      B: "byte, 8",
      C: "short, 1",
      D: "short, 16",
      ans: "byte, 8",
      isDisable: "false"
    },
    {
      q: "Size of float and double in Java is",
      A: "32 and 64",
      B: "64 and 64",
      C: "32 and 32",
      D: "64 and 32",
      ans: "32 and 64",
      isDisable: "false"
    },
    {
      q: "Automatic type conversion in Java takes place when",
      A:
        "Two type are compatible and size of destination type is shorter than source type.",
      B:
        "Two type are compatible and size of destination type is equal of source type.",
      C:
        "Two type are compatible and size of destination type is larger than source type.",
      D: "All of the above",
      ans:
        "Two type are compatible and size of destination type is larger than source type"
    },
    {
      q: " Which of the following automatic type conversion will be possible",
      A: " short to int",
      B: "byte to int",
      C: "int to long",
      D: "long to int",
      ans: "int to long",
      isDisable: "false"
    },
    {
      q:
        "The following fraction of code double STATIC = 2.5 System.out.println( STATIC );",
      A: "Prints 2:5",
      B: "Rraises an error as STATIC is used as a variable which is a keyword",
      C: "Raises an exception",
      D: "None of these",
      ans: "Prints 2.5",
      isDisable: "false"
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public saveData: DataProvider
  ) {}

  ionViewDidLoad() {
    // console.log("ionViewDidLoad JavaPage");
  }
  submit() {
    // let alert = this.alertCtrl.create({
    //   title: "html",
    //   subTitle: "your score is: " + this.counter,
    //   buttons: ["OK"]
    // });
    // alert.present();
    this.saveData.saveResult("javaMarks", this.counter)
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
