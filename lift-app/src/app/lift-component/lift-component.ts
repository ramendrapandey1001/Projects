import { Component, Input } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
  } from '@angular/animations';

@Component({
  selector: 'app-lift-component',
  imports: [],
  templateUrl: './lift-component.html',
  styleUrl: './lift-component.scss',
  animations: [
    trigger('doorState', [
      state('closed', style({ transform: 'translateX(0%)' })),
      state('open-left', style({ transform: 'translateX(-100%)' })),
      state('open-right', style({ transform: 'translateX(100%)' })),
      transition('* => *', animate('600ms ease-in-out'))
    ])
  ]
})
export class LiftComponent {
	@Input() isOpen: boolean = false;
	@Input() liftNumber: number = 1;  
}
