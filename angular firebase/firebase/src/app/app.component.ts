import { Component } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase';

  employee: string;
  employeeName: string;
  employeeAge: number;
  employeeAddress: string;
  message: string;

  constructor(public crudservice: CrudService){}

  CreateRecord() {
   let Record = {};
   Record['name'] = this.employeeName;
   Record['age'] = this.employeeAge;
   Record['address'] = this.employeeAddress;
  
   this.crudservice.create_Newemployee(Record).then(res => {
      this.employeeName = "";
      this.employeeAge = undefined;
      this.employeeAddress = "";
      console.log(res);
      this.message = "Employee data save Done";
   }).catch(error => {
     console.log(error);
   })
  }

}
