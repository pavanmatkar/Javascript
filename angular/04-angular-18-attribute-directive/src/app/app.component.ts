import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AttributeDirectiveComponent } from './component/directive/attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AttributeDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '4.2-angular-18-attribute-directive';
}
