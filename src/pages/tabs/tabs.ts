import { Component } from '@angular/core';
import { FavoritePage } from './../favorite/favorite';
import { LibraryPage } from './../library/library';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  favoritePage = FavoritePage;
  libraryPage = LibraryPage;
}
