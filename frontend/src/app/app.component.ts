import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public receivedTaskFormVisible:boolean= false;
  receiveTaskFormVisible(data: boolean) {
    this.receivedTaskFormVisible = data;
  }
}
