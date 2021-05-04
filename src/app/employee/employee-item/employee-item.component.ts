import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/employee-service';
import {Employee} from '../../models/employee';


@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  gendersList = ['Male', 'Female'];
  employee: Employee = new Employee();

  constructor(private router: Router, private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  public goToPage(path: string): void {
    this.router.navigate([path]);
  }

  public save(): void {
    this.employeeService.create(this.employee);
    this.goToPage('employee');
  }

  public isValid(): boolean {
    if (this.employee.id && this.employee.name && this.employee.salary && this.employee.gender) {
      return true;
    }
    return false;
  }

}
