import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, MenuController } from 'ionic-angular';
import { QuotesService } from './../../services/quotes';
import { Quote } from '../../data/quotes.interface';
import { QuotePage } from './../quote/quote';
import { SettingsService } from './../../services/settings';



@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  quotes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public quotesService: QuotesService, private modalCtrl: ModalController,
 private menuCtrl: MenuController, private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean)=> {
      if (remove) {
        this.quotesService.removeQuoteFromFavorites(quote);
      this.quotes = this.quotesService.getFavoriteQuotes();
      }
    });
  }
 
  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onOpenMenu() {
    this.menuCtrl.open();
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';  
  }
}
