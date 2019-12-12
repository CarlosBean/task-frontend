import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
// import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    component: TasksListComponent,
    data: { title: 'Tasks' }
  },
  /* {
    path: 'new',
    component: UserUpdateComponent,
    data: { title: 'New User', animation: 'UserForm' }
  },
  {
    path: 'update/:id',
    component: UserUpdateComponent,
    data: { title: 'Update User', animation: 'UserForm' }
  } */
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}