import { Task } from "../models/task";
import { TaskView } from "../models/task-view";

export class TaskConverter {
  static toTaskView(task: Task): TaskView {
    return {
      id: task.id,
      title: task.title,
      status: task.status,
      date: task.date,
      daysPassed: this.getDaysPassed(task)
    };
  }

  private static getDaysPassed(task: Task): number {
    if (!task.date) {
      return 0;
    }
    const timePassed: number = new Date().getTime() - new Date(task.date).getTime();
    return Math.round(timePassed / (1000 * 3600 * 24));
  }
}
