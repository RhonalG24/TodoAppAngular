import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListService } from '../../../services/todo-list.service';
import { Task } from '../../../interfaces/task.interface';
import { Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';
import { TaskCardComponent } from "../task-card/task-card.component";


@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: `./todo-list.component.html`,
    styleUrl: './todo-list.component.css',
    imports: [ReactiveFormsModule, TaskCardComponent]
})
export class TodoListComponent {
  todoList:Task[];

  newTaskNavigate(){
    this.router.navigateByUrl('/newTask');
  }

  constructor(private todoListService:TodoListService,
    private taskService:TaskService,
    private router: Router){
    // this.todoListServices.addTask({
    //   title: "Aprender Angular",
    //   description: "Revisar la documentación de Angular y practicar",
    // });
    // this.todoListServices.addTask({
    //   title: "Reunirse con Pachu",
    //   description: "Asistir a la reunión con Pachu para aprender más de Angular",
    // });
    this.todoList = this.todoListService.getAllTasks();
  }
}
