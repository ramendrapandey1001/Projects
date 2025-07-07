import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiftComponent } from './lift-component/lift-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LiftComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'lift-app';
}
