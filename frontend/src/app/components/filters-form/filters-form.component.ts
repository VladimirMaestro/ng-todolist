import { Component, inject, OnInit } from "@angular/core";
import { TaskStatus } from "../../models/task-status";
import { AppStore } from "../../store/app.store";
import { AppState } from "../../models/app-state";

@Component({
  selector: 'app-filters-form',
  templateUrl: 'filters-form.component.html'
})
export class FiltersFormComponent implements OnInit {
  protected TaskStatus = TaskStatus;
  protected appStore: AppStore = inject(AppStore);
  protected currentStatus: TaskStatus;

  ngOnInit(): void {
    this.appStore.state$.subscribe((state: AppState) => {
      this.currentStatus = state.filters.status;
    });
  }

  applyFilters(status?: TaskStatus):void {
    this.appStore.patchFilters({ status });
  }
}
