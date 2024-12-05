import { TaskStatus } from "./task-status";

export interface Task {
  id?: string;
  title: string;
  description: string;
  days: number;
  status: TaskStatus;
  date: string;
}
