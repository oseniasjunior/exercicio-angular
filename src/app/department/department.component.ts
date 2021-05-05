import {Component, OnInit} from '@angular/core';
import {Department} from '../models/department';
import {NavigationExtras, Router} from '@angular/router';
import {BaseService} from '../services/base-service';
import {Helpers} from '../helpers';


@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  departmentList: Department[] = [];
  displayedColumns: string[] = ['id', 'name', 'created_at', 'modified_at'];
  helpers = Helpers;

  constructor(private departmentService: BaseService<Department>, private router: Router) {
    this.departmentService.path = 'department';
  }

  ngOnInit(): void {
    this.getAll();
  }

  public getAll(): void {
    this.departmentService.getAll().subscribe(
      response => this.departmentList = response,
      ex => console.log(ex)
    );
  }

  public goToPage(path: string): void {
    const extras: NavigationExtras = {queryParamsHandling: 'merge'};
    this.router.navigate([path], extras).then();
  }
}
