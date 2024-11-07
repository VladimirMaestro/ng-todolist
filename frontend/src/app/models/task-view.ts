import { TaskStatus } from "./task-status";

export interface TaskView {
  id: string;
  title: string;
  status: TaskStatus;
  date: string;
  daysPassed: number;
}
