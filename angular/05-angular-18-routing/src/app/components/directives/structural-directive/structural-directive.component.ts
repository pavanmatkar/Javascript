import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  constructor(private router: Router){

  };

  navigateToAttribute(){
    this.router.navigateByUrl("attribute-dir")
  };

};
