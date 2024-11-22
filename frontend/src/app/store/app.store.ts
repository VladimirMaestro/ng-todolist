import { AppState } from "../models/app-state";
import { Task } from "../models/task";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { TaskFilters } from "../models/task-filters";
import { TaskStatus } from "../models/task-status";


@Injectable({ providedIn: 'root' })
export class AppStore {
  private state: AppState = { filters: { status: null, searchString: null }, tasks: [] };
  private stateSubject$: BehaviorSubject<AppState> = new BehaviorSubject(this.state);
  public state$: Observable<any> = this.stateSubject$.asObservable();

  patchFilters(filters: Partial<TaskFilters>): void {
    this.state = { ...this.state, filters: { ...this.state.filters, ...filters } };
    this.stateSubject$.next(this.state);
  }

  setTasks(tasks: Task[]): void {
    this.state = { ...this.state, tasks };
    this.stateSubject$.next(this.state);
  }

  addTask(task: Task): void {
    this.state = {
      ...this.state,
      tasks: [...this.state.tasks, task]
    };
    this.stateSubject$.next(this.state);
  }

  updateTask(taskToUpdate: Task): void {
    this.state = {
      ...this.state,
      tasks: this.state.tasks.map((task: Task) => {
        return task.id === taskToUpdate.id ? taskToUpdate : task;
      })
    };
    this.stateSubject$.next(this.state);
  }

  deleteTask(taskToDelete: Task): void {
    const newTasks: Task[] = this.state.tasks.filter((item: Task) => {
      return item.id !== taskToDelete.id;
    });
    this.state = { ...this.state, tasks: newTasks };
    this.stateSubject$.next(this.state);
  }

  findTaskById(taskId: string): Task | undefined {
    return this.state.tasks.find((task: Task) => {
      return task.id === taskId;
    });
  }
}
