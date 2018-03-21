import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
/* import for localStorage Access */
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { HtmlPage } from "../pages/html/html";
import { JavaPage } from "../pages/java/java";
import { DataProvider } from "../providers/data/data"; /* for storing result data */
import { CssPage } from "../pages/css/css";
import { JavascriptPage } from "../pages/javascript/javascript";
import { ResultPage } from "../pages/result/result";
import { CustomQuizPage } from "../pages/custom-quiz/custom-quiz";
import { CreateQuizPage } from "../pages/create-quiz/create-quiz";
import { QuestionsPage } from "../pages/questions/questions";
import { TakeQuizPage } from "../pages/take-quiz/take-quiz";
import { AddSubquizPage } from "../pages/add-subquiz/add-subquiz";
import {ShowQuizPage} from "../pages/show-quiz/show-quiz";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HtmlPage,
    JavaPage,
    CssPage,
    JavascriptPage,
    ResultPage,
    CustomQuizPage,
    CreateQuizPage,
    QuestionsPage,
    TakeQuizPage,
    AddSubquizPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HtmlPage,
    JavaPage,
    CssPage,
    JavascriptPage,
    ResultPage,
    CustomQuizPage,
    CreateQuizPage,
    QuestionsPage,
    TakeQuizPage,
    AddSubquizPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DataProvider
  ]
})
export class AppModule {}
