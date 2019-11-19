import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: { title: 'Users', animation: 'UserList' }
  },
  {
    path: 'new',
    component: UserUpdateComponent,
    // resolve: { user: UserResolve },
    data: { title: 'New User', animation: 'UserForm' }
  },
  {
    path: 'update/:id',
    component: UserUpdateComponent,
    // resolve: { user: UserResolve },
    data: { title: 'Update User', animation: 'UserForm' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
