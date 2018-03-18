import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HtmlPage } from '../pages/html/html';
import { JavaPage } from '../pages/java/java';
import { DataProvider } from '../providers/data/data';
import { CssPage } from '../pages/css/css';
import { JavascriptPage } from '../pages/javascript/javascript';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HtmlPage,
    JavaPage,
    CssPage,
    JavascriptPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DataProvider
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HtmlPage,
    JavaPage,
   JavascriptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
