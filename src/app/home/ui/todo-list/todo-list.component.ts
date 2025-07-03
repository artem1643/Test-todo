import { Component, input, output } from '@angular/core';
import { Todo } from '../../../model/todo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  imports: [RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  todos = input.required<Todo[]>();
  removeTodo = output<string>();
  updateStatus = output<string>();
}
