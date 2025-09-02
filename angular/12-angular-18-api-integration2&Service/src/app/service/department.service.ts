import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class DepartmentService {

  apiURL: string = "https://projectapi.gerasim.in/api/Complaint/";

  constructor(private http: HttpClient) { }

  getAllDept(){
    debugger;
    // this is concatenation
    return this.http.get(this.apiURL + "GetParentDepartment");
  }

  saveNewDept(obj: any){
    // this is template literal
    return this.http.post(`${this.apiURL}AddNewDepartment`, obj)
  }
  addTwoNo(num1: number, num2: number){
    debugger;
    return num1 + num2;
  }
}
