import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList: any [] = [];
  customerList: any [] = [];

  constructor(private http: HttpClient){
    this.getAllUser();
  }

  getAllUser(){
    debugger;
    this.http.get("https://fakerestapi.azurewebsites.net/api/v1/Activities").subscribe((result:any)=>{
      debugger;
      this.userList = result;
    })
  }
  getAllCustomer(){
    this.http.get("https://fakerestapi.azurewebsites.net/api/v1/Users").subscribe((res:any)=>{
      debugger;
      this.customerList = res;
    }, error=>{
      debugger;
    })
  }

}
