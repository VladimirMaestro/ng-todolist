import { Component, EventEmitter, inject, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { TasksService } from "../../services/tasks.service";
import { Task } from "../../models/task";
import { TaskStatus } from "../../models/task-status";
import { BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: 'app-new-task-form',
  templateUrl: 'new-task-form.component.html',
})
export class NewTaskFormComponent {
  public titleCtrl: FormControl = new FormControl('', [Validators.required]);
  public descriptionCtrl: FormControl = new FormControl('', [Validators.required]);
  public daysCtrl: FormControl = new FormControl('', [Validators.required]);

  private tasksService: TasksService = inject(TasksService);
  public bsModalRef: BsModalRef = inject(BsModalRef);

  createTask(): void {
    if (this.titleCtrl.invalid || this.descriptionCtrl.invalid || this.daysCtrl.invalid) {
      alert('Required fields are not filled in');
      return;
    }
    const task: Task = {
      title: this.titleCtrl.value,
      description: this.descriptionCtrl.value,
      days: this.daysCtrl.value,
      status: TaskStatus.NOT_STARTED,
      date: new Date().toISOString()
    };
    this.tasksService.createTask$(task).subscribe();
  }

  onCancel(): void {
    this.bsModalRef.hide();
  }
}
