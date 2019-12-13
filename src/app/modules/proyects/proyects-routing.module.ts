import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProyectsListComponent } from './proyects-list/proyects-list.component';
import { ProyectUpdateComponent } from './proyect-update/proyect-update.component';
import { Observable, of } from 'rxjs';
import { ProyectService } from './proyect.service';
import { Proyecto } from 'src/app/shared/models/proyecto';
// import { UserUpdateComponent } from './user-update/user-update.component';

@Injectable({ providedIn: 'root' })
export class ProyectoResolve implements Resolve<any> {
    constructor(private service: ProyectService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const id = route.params.id ? route.params.id : null;
        return id ? this.service.getById(id) : of(new Proyecto());
    }
}

const routes: Routes = [
  {
    path: '',
    component: ProyectsListComponent,
    data: { title: 'Proyects' }
  },
  {
    path: 'new',
    component: ProyectUpdateComponent,
    resolve: { proyecto: ProyectoResolve }, // cambiar nombre del objeto por algo mas generico
    data: { title: 'New Proyect', animation: 'UserForm' }
  },
  {
    path: 'update/:id',
    component: ProyectUpdateComponent,
    resolve: { proyecto: ProyectoResolve },
    data: { title: 'Update Proyect', animation: 'UserForm' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectsRoutingModule {}