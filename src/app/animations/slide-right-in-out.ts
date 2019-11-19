import {
  trigger,
  state,
  animate,
  transition,
  style
} from '@angular/animations';

export const slideRightInOut = trigger('slideRightInOut', [
  state(
    '*',
    style({
      position: 'absolute',
      top: 0,
      left: '25%',
      right: 0,
      bottom: 0,
      width: '75%',
      zIndex: 50
    })
  ),

  transition(':enter', [
    style({ top: '-100%', backgroundColor: 'rgba(0, 0, 0, 0)' }),
    animate(
      '.5s ease-in-out',
      style({ top: 0, backgroundColor: 'rgba(0, 0, 0, 0.2)' })
    )
  ]),

  transition(':leave', [
    animate(
      '.4s ease-in-out',
      style({ top: '-100%', backgroundColor: 'rgba(0, 0, 0, 0)' })
    )
  ])
]);
