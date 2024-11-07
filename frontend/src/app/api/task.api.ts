import { inject, Injectable } from "@angular/core";
import { Task } from "../models/task";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: 'root' })
export class TaskApi {
  private http: HttpClient = inject(HttpClient);

  getAll$(): Observable<Task[]> {
    return this.http.get<Task[]>('http://localhost:3000/api/tasks');
  }

  update$(task: Task): Observable<Task> {
    return this.http.put<Task>(`http://localhost:3000/api/tasks/${task.id}`, task);
  }

  create$(task: Task): Observable<Task> {
    console.log("create", task);
    return this.http.post<Task>(`http://localhost:3000/api/tasks`, task);
  }

  delete$(taskId: string): Observable<Task> {
    return this.http.delete<Task>(`http://localhost:3000/api/tasks/${taskId}`);
  }
}
