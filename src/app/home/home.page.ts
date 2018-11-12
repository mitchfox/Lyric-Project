import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  todos: Todo[];




  constructor(private router: Router, private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  remove(item) {
    this.todoService.removeTodo(item.id);
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
