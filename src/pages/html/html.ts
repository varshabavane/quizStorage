import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { AlertController } from "ionic-angular";
import { ResultPage } from "../result/result";

/* import for Storing values to localStorage */
import { DataProvider } from "../../providers/data/data";

@Component({
  selector: "page-html",
  templateUrl: "html.html"
})
export class HtmlPage {
  counter = 0;
  ans = [];
  question = [
    {
      q: "1. Who is making the Web standards?",
      A: "Microsoft",
      B: "Google",
      C: "Mozilla",
      D: "The World Wide Web Consortium",
      ans: "Mozilla",
      isDisable: "false"
    },
    {
      q:
        "2. Which of the following input control accepts only numerical value in Web Form 2.0?",
      A: "week",
      B: "time",
      C: "number",
      D: "range",
      ans: "number",

      isDisable: "false"
    },
    {
      q:
        "3.  Which of the following tag represents a generic document or application section in HTML5?",
      A: " section",
      B: "article",
      C: "aside",
      D: "header",
      ans: "section",
      isDisable: "false"
    },
    {
      q: "4.  Can you use SVG tags directly in HTML5 without any plugin?",

      A: " true",

      B: " false",
      ans: "true",
      isDisable: "false"
    },
    {
      q:
        "5.  Which of the following attribute triggers event after the document is printed?",

      A: "offlineprint",

      B: " onprint",

      C: " onafterprint",

      D: "onbeforeprint",

      ans: "onafterprint",
      isDisable: "false"
    },
    {
      q:
        "6.  Which of the following attribute triggers event at the start of a drag operation?",

      A: "ondragleave",

      B: "ondrag",

      C: "ondragover",

      D: "ondragstart",
      ans: "ondragstart",
      isDisable: "false"
    },

    {
      q:
        "7. Which of the following attribute triggers event when the browser starts to load the media data?",

      A: "onloadedmetadata",

      B: "onloadstart",

      C: "onmessage",

      D: "onoffline",
      ans: "onloadstart",
      isDisable: "false"
    },
    {
      q:
        "8. which of the following tag is used to mark a begining of paragraph ?",

      A: "<TD>",

      B: "<br>",

      C: "<P>",

      D: "<TR>",
      ans: "<p>",
      isDisable: "false"
    },
    {
      q: "9. Correct HTML tag for the largest heading is",

      A: "<head>",

      B: "<h6>",

      C: "<heading>",

      D: "<h1>",
      ans: "<h1>",
      isDisable: "false"
    },
    {
      q: " 10. From which tag descriptive list starts ?",

      A: "<LL>",

      B: "<DD>",
      C: "<DL>",
      D: "<DS>",
      ans: "<DL>",
      isDisable: "false"
    },

    {
      q: "The common element which describe the web page, is",
      A: "heading",
      B: "paragraph",
      C: "list",
      D: "All of these",
      ans: "All of these",
      isDisable: "false"
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public saveData: DataProvider
  ) {}
  // ionViewDidLoad() {
  //   console.log("ionViewDidLoad HtmlPage");
  //   // this.question = this.navParams.get('html')
  // }

  submit() {
    this.saveData.saveResult('htmlMarks',this.counter)
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
