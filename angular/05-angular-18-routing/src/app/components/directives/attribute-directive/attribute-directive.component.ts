import { Component, NgModule } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

}
