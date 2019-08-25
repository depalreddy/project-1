import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.component.html",
  styleUrls: ["./transfer.component.css"]
})
export class TransferComponent implements OnInit {
  userData: Subscription;
  loginData: any;
  isValidate: boolean;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.isValidate = false;
    this.userData = this.employeeService
      .getOrderData()
      .subscribe((loginInfo: any) => {
        this.loginData = loginInfo;
      });
  }

  onSearchChange(searchValue: string): void {
    if (searchValue.length > 0) {
      this.isValidate = true;
    } else {
      this.isValidate = false;
    }
  }
}
