import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/tasks-list/tasks-list.component';
import { NewTaskFormComponent } from './components/new-task-form/new-task-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FiltersFormComponent } from "./components/filters-form/filters-form.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    NewTaskFormComponent,
    FiltersFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
