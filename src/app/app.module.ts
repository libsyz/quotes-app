import { LibraryPage } from './../pages/library/library';
import { QuotePage } from './../pages/quote/quote';
import { FavoritePage } from './../pages/favorite/favorite';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { QuotesPage } from '../pages/quotes/quotes';
import { Quote } from '@angular/compiler';
import { SettingsPage } from '../pages/settings/settings';
import { QuotesService } from './../services/quotes';
import { SettingsService } from '../services/settings';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    QuotesPage,
    FavoritePage,
    QuotePage,
    LibraryPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    QuotesPage,
    FavoritePage,
    QuotePage,
    LibraryPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuotesService,
    SettingsService
  ]
})
export class AppModule {}
