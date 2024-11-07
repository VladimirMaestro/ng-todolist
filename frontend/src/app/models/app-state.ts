import { Task } from "./task";
import { TaskFilters } from "./task-filters";

export interface AppState {
  tasks: Task[];
  filters: TaskFilters;
}
