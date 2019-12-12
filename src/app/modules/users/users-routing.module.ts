import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { UsersService } from './users.service';

@Injectable({ providedIn: 'root' })
export class UserResolve implements Resolve<any> {
    constructor(private service: UsersService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const id = route.params.id ? route.params.id : null;
        return id ? this.service.getById(id) : of(new User());
    }
}

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
    data: { title: 'Users', animation: 'UserList' }
  },
  {
    path: 'new',
    component: UserUpdateComponent,
    resolve: { user: UserResolve },
    data: { title: 'New User', animation: 'UserForm' }
  },
  {
    path: 'update/:id',
    component: UserUpdateComponent,
    resolve: { user: UserResolve },
    data: { title: 'Update User', animation: 'UserForm' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
