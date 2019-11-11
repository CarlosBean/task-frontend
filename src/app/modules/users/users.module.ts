import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [UsersRoutingModule, SharedModule]
})
export class UsersModule {}
