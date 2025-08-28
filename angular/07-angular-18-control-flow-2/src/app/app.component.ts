import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForComponent } from './component/control-flow/for/for/for.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '07-angular-18-control-flow-2';
}
