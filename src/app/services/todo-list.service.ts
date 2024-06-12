import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task.interface';
import { CreateTask } from '../interfaces/createTask.interface';
import { storage } from '../utils/storage';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private counter:number = storage.get('counter') ? storage.get('counter') as number : 1;
  private todoList = storage.get('todoList') ? storage.get('todoList') as Task[] : new Array<Task>;

  addTask(task:CreateTask){
    const newTask = this.createTask(task);
    this.todoList.push(newTask);
    storage.set('todoList', this.todoList);
  };

  editTask(task:Task){
    const index = this.findIndex(task.id)
    this.todoList[index] = task;
    storage.set('todoList', this.todoList);
  }

  deleteTask(id:number):number{
    const index = this.findIndex(id)
    if(index !== -1){
      this.todoList.splice(index, 1);
      storage.set('todoList', this.todoList);
      return 1;
    }
    return 0;
  }

  getTask(id:number):Task{
    const task:Task[] = this.todoList.filter(task => task.id === id);
    return task[0];
  }

  getAllTasks():Array<Task>{
    return this.todoList;
  }

  private findIndex(id:number){
    return this.todoList.findIndex(task => task.id === id);
  }

  private createTask(task:CreateTask):Task{
    let newTask: Task = {
      id: this.getNewId(),
      title: task.title,
      description: task.description,
      completed: false,
    };
    return newTask;
  }

  private getNewId():number{
    const id = this.counter;
    this.counter++;
    storage.set('counter', this.counter)
    return id;
  }

}
