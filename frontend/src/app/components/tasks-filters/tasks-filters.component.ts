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
  protected currentTaskStatus: TaskStatus;
  public searchStringControl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.appStore.state$.subscribe((state: AppState) => {
      this.currentTaskStatus = state.filters.status;
    });
  }

  applyStatusFilter(status?: TaskStatus): void {
    this.appStore.patchFilters({ status });
  }

  onFilterSearchStringChange() {
    this.appStore.patchFilters({ searchString: this.searchStringControl.value });
  }
}
