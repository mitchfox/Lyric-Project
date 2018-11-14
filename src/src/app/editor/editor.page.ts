import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from './../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})

export class EditorPage implements OnInit {

  todo: Todo = {
    compositionName: '',
    createdAt: new Date().getTime(),
    compositionDescription: '',
    compositionData: ''
  };

  todoId = null;

  constructor(private route: ActivatedRoute, private nav: NavController,
  private todoService: TodoService, private loadingController: LoadingController ) { }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId) {
      this.loadTodo();
    }
  }

  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Composition'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }

  async saveTodo() {
    const loading = await this.loadingController.create({
      message: 'Saving Composition'
    });
    await loading.present();
      if (this.todoId) {
        this.todoService.updateTodo(this.todo, this.todoId).then(() => {
          loading.dismiss();
          this.nav.goBack();
        });

      } else {
        this.todoService.addTodo(this.todo).then(() => {
          loading.dismiss();
          this.nav.goBack();
        });
      }

  }



}
