import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../services/employee-service';
import {Employee} from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employeeList: Employee[] = [];

  constructor(private router: Router, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeList = this.employeeService.getAll();
  }

  public goToPage(path: string): void {
    this.router.navigate([path]);
  }

}
