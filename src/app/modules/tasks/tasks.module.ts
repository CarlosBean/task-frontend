import { NgModule } from '@angular/core';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

@NgModule({
  declarations: [TasksListComponent, TaskUpdateComponent],
  imports: [TasksRoutingModule, SharedModule]
})
export class TasksModule {}