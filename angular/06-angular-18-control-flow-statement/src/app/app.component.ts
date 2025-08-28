import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IfelseComponent } from './components/controlFlow/ifelse/ifelse/ifelse.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IfelseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '06-angular-18-control-flow-statement';
}
