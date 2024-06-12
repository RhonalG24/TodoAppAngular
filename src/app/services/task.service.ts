import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskId: number = 0;
  task :Task = {
    id: 0,
    title: "My task",
    description: "My description",
    completed: false
  };

  getTaskId():number{
    return this.taskId;
  }

  saveTaskId(taskId:number){
    this.taskId = taskId;
  }

  getTask():Task{
    return this.task;
  }
  saveTask(task:Task){
    this.task = task;
  }

}
