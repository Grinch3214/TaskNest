export interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export type NewTask = Omit<Task, 'id'>;
