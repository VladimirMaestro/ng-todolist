import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { TasksService } from "../../services/tasks.service";
import { Task } from "../../models/task";
import { TaskStatus } from "../../models/task-status";

@Component({
  selector: 'app-new-task-form',
  templateUrl: 'new-task-form.component.html',
})
export class NewTaskFormComponent {
  public titleCtrl: FormControl = new FormControl('', [Validators.required]);
  private tasksService: TasksService = inject(TasksService);
  @Output() cancel = new EventEmitter<boolean>();
  createTask(): void {
    if (this.titleCtrl.invalid) {
      return;
    }
    const task: Task = {
      title: this.titleCtrl.value,
      status: TaskStatus.NOT_STARTED,
      date: new Date().toISOString()
    };
    this.tasksService.createTask$(task).subscribe();
  }

  onCancel(): void {
    this.cancel.emit(false);
  }
}
