import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from './../../services/quotes';
import { Quote } from '../../data/quotes.interface';
import { QuotePage } from './../quote/quote';


@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {
  quotes: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public quotesService: QuotesService, private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }
 

}
