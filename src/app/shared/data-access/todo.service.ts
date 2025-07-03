import { effect, inject, Injectable, Signal, signal } from '@angular/core';
import { CreateTodo, Todo } from '../../model/todo';
import { StorageService } from './storage.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class TodoService {
  storageSrc = inject(StorageService);
  #todos = signal<Todo[]>([]);
  todos = this.#todos.asReadonly();

  private todoLoaded$ = this.storageSrc.loadTodos();

  addTodo(todo: CreateTodo): void {
    this.#todos.update((todos) => [
      ...todos,
      { ...todo, id: Date.now().toString(), status: false },
    ]);
  }
  updateStatus(id: string): void {
    this.#todos.update((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  }
  removeTodo(id: string): void {
    this.#todos.update((todos) => todos.filter((todo) => todo.id !== id));
  }
  getTodoById(id: string): string {
    const todo = this.#todos().find((todo) => todo.id === id);
    if (todo?.description) return todo.description;
    return '';
  }
  constructor() {
    this.todoLoaded$.pipe(takeUntilDestroyed()).subscribe((todos) => {
      this.#todos.update((_) => [...todos]);
    });
    effect(() => {
      this.storageSrc.saveToDos(this.#todos());
    });
  }
}
