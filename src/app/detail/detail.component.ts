import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TodoService } from '../shared/data-access/todo.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-detail',
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export default class DetailComponent {
  route = inject(ActivatedRoute);
  TodoSrc = inject(TodoService);

  private paramMap = toSignal(this.route.paramMap);

  todo = computed(() =>
    this.TodoSrc.todos().find((todo) => todo.id === this.paramMap()?.get('id'))
  );
}
