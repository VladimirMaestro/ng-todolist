import { Component, inject, OnInit } from "@angular/core";
import { Task } from "../../models/task";
import { TaskStatus } from "../../models/task-status";
import { TasksService } from "../../services/tasks.service";
import { TaskConverter } from "../../converters/task.converter";
import { TaskView } from "../../models/task-view";

@Component({
  selector: 'app-tasks-list',
  templateUrl: 'tasks-list.component.html',
  styleUrls: ['tasks-list.component.scss']
})
export class TaskListComponent implements OnInit {
  private tasksService: TasksService = inject(TasksService);
  public tasks: TaskView[] = [];
  public loaded: boolean = false;

  ngOnInit(): void {
    this.tasksService.fetchTasks$().subscribe(() => {
      this.loaded = true;
    });
    this.tasksService.getFilteredTasks$().subscribe((filteredTasks: Task[]) => {
      this.tasks = filteredTasks.map((task: Task) => {
        return TaskConverter.toTaskView(task);
      });
    })
  }

  onCompleteStatusChange(task: TaskView, completed: boolean): void {
    const newStatus: TaskStatus = completed ? TaskStatus.COMPLETED : TaskStatus.NOT_STARTED;
    this.tasksService.setTaskStatus$(task.id, newStatus).subscribe();
  }

  isTaskCompleted(task: TaskView): boolean {
    return task.status === TaskStatus.COMPLETED;
  }

  deleteTask(task: Task): void {
    this.tasksService.deleteTask$(task).subscribe();
  }
}
