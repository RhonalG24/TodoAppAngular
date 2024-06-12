import { Component } from '@angular/core';
import { TodoListService } from '../../../services/todo-list.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Task } from '../../../interfaces/task.interface';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-edit-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-task-form.component.html',
  styleUrl: './edit-task-form.component.css'
})
export class EditTaskFormComponent {
  task: Task;
  id: number;

  constructor(private todoListService: TodoListService,
    private taskService: TaskService,
    private router: Router
  ){
    this.id = taskService.getTaskId();
    this.task = todoListService.getTask(this.id)
  }

  todoListForm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required)
  });

  handleSubmit(){
    const newTask = <Task>{
      id: this.task.id,
      title: this.todoListForm.value.title,
      description: this.todoListForm.value.description,
      completed: this.task.completed
    }
    this.todoListService.editTask(newTask);
    this.handleBack();
  }
  handleBack(){
    this.router.navigateByUrl('/');
  }
}
