import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-tasks-list',
  templateUrl: 'tasks-list.component.html',
  styleUrls: ['tasks-list.component.scss']
})
export class TaskListComponent {
  @Input('abc') name: string;
  @Output('abcChange') nameChange: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.name);
  }

  emitData(): void {
    this.nameChange.emit('Hello world!');
  }
}
