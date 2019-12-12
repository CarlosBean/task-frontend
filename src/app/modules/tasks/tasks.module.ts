import { NgModule } from '@angular/core';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [TasksListComponent],
  imports: [TasksRoutingModule, SharedModule]
})
export class TasksModule {}