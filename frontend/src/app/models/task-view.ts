import { TaskStatus } from "./task-status";

export interface TaskView {
  id: string;
  title: string;
  description: string;
  daysLeft: number;
  status: TaskStatus;
  date: string;
  daysPassed: number;
  days: number
}
