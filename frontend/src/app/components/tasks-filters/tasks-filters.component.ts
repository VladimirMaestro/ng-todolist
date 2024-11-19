import { Component, inject, OnInit ,EventEmitter, Output} from "@angular/core";
import { TaskStatus } from "../../models/task-status";
import { AppStore } from "../../store/app.store";
import { AppState } from "../../models/app-state";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-tasks-filters',
  templateUrl: 'tasks-filters.component.html',
  styleUrls: ['tasks-filters.component.scss']
})
export class TasksFiltersComponent implements OnInit {
  protected TaskStatus = TaskStatus;
  protected appStore: AppStore = inject(AppStore);
  protected currentStatus: TaskStatus;
  public searchStringControl: FormControl = new FormControl('',);
  // @Output() taskFormVisible = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.appStore.state$.subscribe((state: AppState) => {
      this.currentStatus = state.filters.status;
    });
  }

  applyStatusFilter(status?: TaskStatus): void {
    this.appStore.patchFilters({ status });
  }

  onFilterSearchStringChange() {
    this.appStore.patchFilters({ searchString: this.searchStringControl.value });
  }

  // showTaskForm(): void {
  //   this.taskFormVisible.emit(true);
  // }

}
