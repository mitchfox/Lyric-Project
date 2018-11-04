import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private router: Router) {

  }

  // Button Click to New Composition
  // newComposition() {
  //   this.navCtrl.navigateForward('/newcomposition');
  // }



  // // Quotes List
  // var musicQuotes = ['Without music, life would be a mistake ― Friedrich Nietzsche.',
  // 'Where words fail, music speaks - Hans Christian Andersen', 'If music be the food of love play on - William Shakespeare',
  // 'Music can change the world because it can change the people - Bono'];
  // var currentQuote = '';

  // // Display Quote
  // newRandomQuote() {

  //   var randomIndex = Math.floor(Math.random() * musicQuotes.length);
  //   var currentQuote = musicQuotes[randomIndex];
  //   return currentQuote;
  // }


}
