import {
  trigger,
  animate,
  transition,
  style,
  query,
  group,
  animateChild
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  transition('UserList => UserForm', [
    group([
      query(':enter', [animate(0, style({ opacity: 1 })), animateChild()], {
        optional: true
      }),
      query(':leave', [animate(0, style({ opacity: 0 })), animateChild()], {
        optional: true
      })
    ])
  ]),

  transition(
    'UserList <=> CommentList, UserList <=> PostList, PostList <=> CommentList',
    [style({ opacity: 0 }), animate('200ms ease-in', style({ opacity: 1 }))]
  )
]);
