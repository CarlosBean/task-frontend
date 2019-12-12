import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { IndexComponent } from './index/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./index/index.module').then(m => m.IndexModule)
      }
    ]
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    children: [
      {
        path: 'proyects',
        loadChildren: () =>
          import('./modules/proyects/proyects.module').then(m => m.ProyectsModule)
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./modules/tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then(
            m => m.UsersModule
          )
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
