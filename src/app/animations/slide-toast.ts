import {
    trigger,
    state,
    animate,
    transition,
    style
  } from '@angular/animations';
  
  export const slideToast = trigger('slideToast', [
    state(
      '*',
      style({
        opacity: 1,
        display: 'block',
        height: '80px',
      })
    ),
  
    transition(':enter', [
      style({ opacity: 0}),
      animate('200ms ease-in-out', style({ opacity: 1 }) )
    ]),
  
    transition(':leave', [
      animate('200ms ease-in-out', style({ opacity: 0 }) ),
      animate('300ms ease-in-out', style({ height: 0 }) ),
    ])
  ]);
  