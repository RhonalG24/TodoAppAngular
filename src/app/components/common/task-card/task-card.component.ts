import { Component, Input } from '@angular/core';
import { Task } from '../../../interfaces/task.interface';
import { TodoListService } from '../../../services/todo-list.service';
import { TaskService } from '../../../services/task.service';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  titleCSS = '';
  descriptionCSS = '';
  completedButtonCSS = '';
  completedButtonText = '';
  @Input() task: Task | any = {};
  // @Input() task<T>(){};

  constructor(private todoListService:TodoListService,
    private taskService:TaskService,
    private router: Router){
      this.setProperties();
  }

  private setProperties(){
    if(!this.task.completed){
      this.titleCSS = "row-auto text-center font-bold";
      this.descriptionCSS = "flex row-auto min-w-96 xl:max-w-screen-lg lg:max-w-screen-md  md:max-w-screen-sm  overflow-clip hover:overflow-x-scroll text-left	";
      this.completedButtonCSS = "bg-white-500 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded m-2";
      this.completedButtonText = "Realizada";
      } else{
        this.titleCSS = "row-auto text-center font-bold line-through";
        this.descriptionCSS = "flex row-auto min-w-96 xl:max-w-screen-lg lg:max-w-screen-md  md:max-w-screen-sm  overflow-clip hover:overflow-x-scroll text-left	line-through";
        this.completedButtonCSS = "bg-white-500 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2";
        this.completedButtonText = "No realizada"
    }
  }


  toggleCompleted(id:number){
    let task = this.todoListService.getTask(id);
    task.completed = !task.completed;
    this.todoListService.editTask(task);
    this.setProperties();
  }

  edit(id:number){
    this.taskService.saveTaskId(id);
    this.router.navigateByUrl('/editTask');
  }

  delete(id:number){
    this.todoListService.deleteTask(id);
  }
}
