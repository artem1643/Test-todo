export interface Todo {
  id: string;
  title: string;
  description?: string;
  status: boolean;
}

export type CreateTodo = Omit<Todo, 'id' | 'status'>;
