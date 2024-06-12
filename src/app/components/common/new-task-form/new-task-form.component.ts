import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoListService } from '../../../services/todo-list.service';
import { CreateTask } from '../../../interfaces/createTask.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.css'
})
export class NewTaskFormComponent {
  constructor(private todoListService: TodoListService,
    private router: Router
  ){
  }
  todoListForm = new FormGroup({
    title: new FormControl<string>('', Validators.required),
    description: new FormControl<string>('', Validators.required)
  });

  handleSubmit(){
    const newTask = <CreateTask>{
      title: this.todoListForm.value.title,
      description: this.todoListForm.value.description
    }
    this.todoListService.addTask(newTask);
    this.handleBack();
  }
  handleBack(){
    this.router.navigateByUrl('/');
  }
}
