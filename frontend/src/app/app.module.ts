import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/tasks-list/tasks-list.component';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NewTaskFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
