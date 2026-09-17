export interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

export type NewTask = Omit<Task, 'id'>;

const URL = 'http://localhost:3001/tasks';

const headers = {
  'Content-Type': 'application/json',
};

const tasksAPI = {
  getAll(): Promise<Task[]> {
    return fetch(`${URL}`).then((res) => res.json());
  },

  add(task: NewTask): Promise<Task> {
    return fetch(`${URL}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(task),
    }).then((res) => res.json());
  },

  delete(id: string): Promise<Response> {
    return fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
  },

  deleteAll(tasks: Task[]): Promise<Response[]> {
    return Promise.all(tasks.map(({ id }) => this.delete(id)));
  },

  toggleComplete(id: string, isDone: boolean): Promise<Response> {
    return fetch(`${URL}/${id}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ isDone }),
    });
  },
};

export default tasksAPI;
