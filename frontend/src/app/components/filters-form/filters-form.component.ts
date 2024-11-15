import { Component, inject, OnInit ,EventEmitter, Output} from "@angular/core";
import { TaskStatus } from "../../models/task-status";
import { AppStore } from "../../store/app.store";
import { AppState } from "../../models/app-state";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-filters-form',
  templateUrl: 'filters-form.component.html',
  styleUrls: ['filters-form.component.scss']
})
export class FiltersFormComponent implements OnInit {
  protected TaskStatus = TaskStatus;
  protected appStore: AppStore = inject(AppStore);
  protected currentStatus: TaskStatus;
  public formSearchString: FormControl = new FormControl('',);
  @Output() taskFormVisible = new EventEmitter<boolean>();
  //public taskFormVisible: boolean = false;

  ngOnInit(): void {
    this.appStore.state$.subscribe((state: AppState) => {
      this.currentStatus = state.filters.status;
    });
  }

  applyFilters(status?: TaskStatus): void {
    this.appStore.patchFilters({ status });
  }

  onInputChange() {
    this.appStore.patchFilters({ searchString: this.formSearchString.value });
  }

  showTaskForm(): void {
    this.taskFormVisible.emit(true);
  }

}
