import {Injectable} from '@angular/core';
import {Employee} from '../models/employee';

@Injectable()
export class EmployeeService {

  public create(employee: Employee): void {
    let employees = [];
    const keyEmployees = localStorage.getItem('employees');
    if (keyEmployees != null) {
      employees = JSON.parse(keyEmployees);
    }
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  public getAll(): Employee[] {
    const keyEmployees = localStorage.getItem('employees');
    if (keyEmployees == null) {
      return [];
    }
    return JSON.parse(keyEmployees);
  }
}
