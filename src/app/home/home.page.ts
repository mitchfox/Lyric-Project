import { Component, OnInit } from '@angular/core';
import { Composition, CompositionService } from '../services/composition.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  // Composition Array
  compositions: Composition[];
  // Composition Counter
  public compositionTotal: 2;

  constructor(private router: Router, private compositionService: CompositionService, public toastController: ToastController) {}

  ngOnInit() {
    this.compositionService.getCompositions().subscribe(res => {
      this.compositions = res;
    });
  }

  remove(item) {
    this.compositionService.removeComposition(item.id);
  }





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
