import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostApiComponent } from './components/apiIntegration/post-api/post-api.component';
import { GetApiComponent } from './components/apiIntegration/get-api/get-api.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GetApiComponent,RouterOutlet, PostApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '12-angular-18-api-integration2';
}
