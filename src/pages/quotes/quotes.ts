import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  private alertCtrl: AlertController) {
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
                    console.log("ok!");
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


}
