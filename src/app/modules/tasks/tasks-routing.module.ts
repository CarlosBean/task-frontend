import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TareaService } from './tarea.service';
import { Observable, of } from 'rxjs';
import { Tarea } from 'src/app/shared/models/tarea';
// import { UserUpdateComponent } from './user-update/user-update.component';

@Injectable({ providedIn: 'root' })
export class TareaResolve implements Resolve<any> {
    constructor(private service: TareaService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const id = route.params.id ? route.params.id : null;
        return id ? this.service.getById(id) : of(new Tarea());
    }
}

const routes: Routes = [
  {
    path: '',
    component: TasksListComponent,
    data: { title: 'Tasks' }
  },
  {
    path: 'new',
    component: TaskUpdateComponent,
    resolve: { tarea: TareaResolve },
    data: { title: 'New User', animation: 'UserForm' }
  },
  {
    path: 'update/:id',
    component: TaskUpdateComponent,
    resolve: { tarea: TareaResolve },
    data: { title: 'Update User', animation: 'UserForm' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}