import { trigger, transition, style, animate, state } from '@angular/animations';

export class Animations {
    static infoView = [
        trigger('routeAnimation', [
            state('*', style({transform: 'translateY(0)', opacity: 1})),
            transition('void => *', [
                style({transform: 'translateY(5%)', opacity: 0}),
                animate('300ms cubic-bezier(0.215, 0.610, 0.355, 1.000)')
            ]),
            transition('* => void', [
                animate('300ms cubic-bezier(0.215, 0.610, 0.355, 1.000)', 
                    style({transform: 'translateY(5%)', opacity: 0})
                )
            ])
        ])
    ]

    static gridHome = [
        trigger('main-overlay-animation', [
            transition(':enter', [
                style({opacity: 0}),
                animate('100ms', style({opacity: 1}))
            ]),
            transition(':leave', [
                style({opacity: 1}),
                animate('100ms', style({opacity: 0}))
            ])
        ])
    ]
}