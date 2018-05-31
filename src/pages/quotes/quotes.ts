import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quotes.interface';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: any;
  allQuotes: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl: AlertController, public quotesService: QuotesService ) {
  }

  ngOnInit() {

    this.quoteGroup = this.navParams.data;
    this.allQuotes = this.quoteGroup.quotes;
  }
  
  addToFavorite(quote: any) {
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      subTitle: "Are you sure?",
      message: "just wanted to add something else",
      buttons: [{ 
                  text:'Yes',
                  handler: ()=>{
                    this.quotesService.addQuoteToFavorites(quote);
                  }
                   },
                  {
                  text: 'Nope',
                  handler: ()=> {
                    console.log("won't do it!");
                  }                          
                }]
    });

    alert.present();
  }

  removeFromFavorite(quote: any){
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quotesService.isQuoteFavorite(quote);
  }

}
