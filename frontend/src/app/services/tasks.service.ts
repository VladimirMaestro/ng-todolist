import { inject, Injectable } from "@angular/core";
import { Task } from "../models/task";
import { AppStore } from "../store/app.store";
import { TaskStatus } from "../models/task-status";
import { TaskApi } from "../api/task.api";
import { map, Observable, tap } from "rxjs";
import { AppState } from "../models/app-state";
import { TaskFilters } from "../models/task-filters";

@Injectable({ providedIn: 'root' })
export class TasksService {
  private appStore: AppStore = inject(AppStore);
  private taskApi: TaskApi = inject(TaskApi);


  fetchTasks$(): Observable<unknown> {
    return this.taskApi.getAll$().pipe(
      tap((tasks: Task[]) => {
        this.appStore.setTasks(tasks);
      })
    )
  }

  deleteTask$(taskToDelete: Task): Observable<unknown> {
    return this.taskApi.delete$(taskToDelete.id).pipe(
      tap(() => {
        this.appStore.deleteTask(taskToDelete);
      })
    )
  };

  createTask$(task: Task): Observable<unknown> {
    const newTask: Task = { ...task, };
    return this.taskApi.create$(newTask).pipe(
      tap((task: Task) => {
        this.appStore.addTask(task);
      })
    )
  }

  setTaskStatus$(taskId: string, newStatus: TaskStatus): Observable<unknown> {
    const task: Task = this.appStore.findTaskById(taskId);
    const newTask: Task = { ...task, status: newStatus };
    return this.taskApi.update$(newTask).pipe(
      tap((task: Task) => {
        this.appStore.updateTask(task);
      })
    )
  }

  getFilteredTasks$(): Observable<Task[]> {
    return this.appStore.state$.pipe(
      // TODO Use selectors to improve performance
      map((state: AppState) => {
        const filters: TaskFilters = state.filters;
        const tasks: Task[] = state.tasks;
        return tasks.filter((task: Task) => {
          if (filters.status && task.status !== filters.status) {
            return false;
          }
          if (filters.searchString) {
            const searchStringLowerCase: string = filters.searchString.toLowerCase();
            const titleLowerCase: string = task.title.toLowerCase();
            return titleLowerCase.includes(searchStringLowerCase);
          }
          return true;
        });
      })
    );
  }
}
