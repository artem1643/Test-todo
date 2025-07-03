import { Component, inject, signal } from '@angular/core';
import { TodoFormComponent } from './ui/todo-form/todo-form.component';
import { CreateTodo, Todo } from '../model/todo';
import { TodoService } from '../shared/data-access/todo.service';
import { TodoListComponent } from './ui/todo-list/todo-list.component';
import { RouterOutlet } from '@angular/router';
import { ModalComponent } from '../shared/ui/modal/modal.component';

@Component({
  selector: 'app-home',
  imports: [TodoFormComponent, TodoListComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent {
  isOpen = signal<boolean>(false);
  todoSrc = inject(TodoService);

  createTodo(todo: CreateTodo) {
    this.todoSrc.addTodo(todo);
  }
}
