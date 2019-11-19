import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';

const routes: Routes = [
  {
    path: '',
    component: CommentListComponent,
    data: { title: 'Comments', animation: 'CommentList' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class CommentsRoutingModule {}
