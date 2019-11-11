import { NgModule } from '@angular/core';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CommentListComponent],
  imports: [CommentsRoutingModule, SharedModule]
})
export class CommentsModule {}
