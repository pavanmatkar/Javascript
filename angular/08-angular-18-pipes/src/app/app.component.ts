import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PipeTheoryComponent } from './components/pipe/pipe-theory/pipe-theory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipeTheoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '08-angular-18-pipes';
}
