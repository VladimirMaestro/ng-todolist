import { Component, inject } from '@angular/core';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { NewTaskFormComponent } from "./components/new-task-form/new-task-form.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public newTaskFormVisible: boolean = false;
  public modalRef: BsModalRef = inject(BsModalRef);

  constructor(private modalService: BsModalService) {}

  openModal(): void {
    const modalRef: BsModalRef = this.modalService.show(NewTaskFormComponent, { ignoreBackdropClick: true });
    modalRef.hide();
  }

  closeModal(): void {
    this.modalRef.hide();
  }

  showTaskForm() {
    this.newTaskFormVisible = true;
  }

  hideTaskForm(): void {
    this.newTaskFormVisible = false;
  }
}
