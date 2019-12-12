import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectsListComponent } from './proyects-list/proyects-list.component';
// import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {
    path: '',
    component: ProyectsListComponent,
    data: { title: 'Proyects' }
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
export class ProyectsRoutingModule {}