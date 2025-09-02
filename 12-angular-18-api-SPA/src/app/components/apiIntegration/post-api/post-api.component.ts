import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../reusableComponent/my-button/my-button.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post-api',
  standalone: true,
  // FormsModule is needed to be imported to use ngModel
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})

export class PostApiComponent{
  deptObj: any = {
    "id": 0,
  "title": "",
  "description": "",
  "pageCount": 0,
  "excerpt": "",
  "publishDate": ""
  };

  http = inject(HttpClient)

  onSave(){
    debugger;
    this.http.post("https://fakerestapi.azurewebsites.net/api/v1/Activities", this.deptObj).subscribe((res:any)=>{
      debugger;
      if (res.completed) {
        alert("Department Created Success")
      } else {
        alert(res.message)
      }
    })
  }

}
