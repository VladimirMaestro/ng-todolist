import { Task } from "../models/task";
import { TaskView } from "../models/task-view";

export class TaskConverter {
  static toTaskView(task: Task): TaskView {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      daysLeft:this.getDaysLeft(task),
      status: task.status,
      date: task.date,
      days:task.days,
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

  private static getDaysLeft(task: Task): number {
    if (!task.date) {
      return 0;
    }
    const dateLeft =new Date(task.date);
    dateLeft.setDate(dateLeft.getDate() + task.days);

    const timeLeft: number =  new Date(dateLeft).getTime()-new Date().getTime();
    return Math.round(timeLeft / (1000 * 3600 * 24));
  }

}
