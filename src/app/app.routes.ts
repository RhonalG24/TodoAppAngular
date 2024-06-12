import { Routes } from '@angular/router';
import { TodoListComponent } from './components/common/todo-list/todo-list.component';
import { NewTaskFormComponent } from './components/common/new-task-form/new-task-form.component';
import { EditTaskFormComponent } from './components/common/edit-task-form/edit-task-form.component';

export const routes: Routes = [
  {
    path: '',
    title: 'TodoList App Home Page',
    component: TodoListComponent,
    },
  {
    path: 'newTask',
    title: 'New Task Page',
    component: NewTaskFormComponent,
    },
  {
    path: 'editTask',
    title: 'Edit Task Page',
    component: EditTaskFormComponent,
    },
];
