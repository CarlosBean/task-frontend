import {
  trigger,
  animate,
  transition,
  style,
  group,
  query
} from '@angular/animations';

export const slideIndex = trigger('slideIndex', [
  transition('Login => Signup', slideTo('left')),
  transition('Forgot => Login', slideTo('left')),
  transition('Login => Forgot', slideTo('right')),
  transition('Signup => Login', slideTo('right'))
]);

function slideTo(direction: string) {
  return [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ],
      { optional: true }
    ),
    query(':enter', [style({ [direction]: '-100%' })], { optional: true }),
    group([
      query(':leave', [animate('600ms ease', style({ [direction]: '140%' }))], {
        optional: true
      }),
      query(':enter', [animate('600ms ease', style({ [direction]: '0%' }))], {
        optional: true
      })
    ])
  ];
}
