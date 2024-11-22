import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public newTaskFormVisible: boolean = false;

  showTaskForm() {
    this.newTaskFormVisible = true;
  }

  hideTaskForm(): void {
    this.newTaskFormVisible = false;
  }
}
