import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent  implements OnInit {
  errorMessage: any;
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
      this.employeeService.orderTransfer(form.value).subscribe(
        (data: any) => {
          if (data) {
            console.log(data);
            // this.employeeService.storeLoginInformation(data.message);
            // this.employeeService.updateOrderData(data.message);
            this.router.navigate(["transfer"]);
          }
          //  else {
          //   this.errorMessage = data.message;
          //   console.log(data);
          // }
        },
        // err => {
        //   console.log(err);
        // }
      );

  }
}
}
