import {Component, OnInit} from '@angular/core';
import {Department} from '../../models/department';
import {NavigationExtras, Router} from '@angular/router';
import {BaseService} from '../../services/base-service';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss']
})
export class DepartmentItemComponent implements OnInit {

  department: Department = new Department();

  constructor(private departmentService: BaseService<Department>, private router: Router) {
    this.departmentService.path = 'department';
  }

  ngOnInit(): void {
  }

  public goToPage(path: string): void {
    const extras: NavigationExtras = {queryParamsHandling: 'merge'};
    this.router.navigate([path], extras).then();
  }

  public save(): void {
    this.departmentService.save(this.department).subscribe(() => {
      console.log('Salvo com sucesso');
      this.goToPage('department');
    });
  }
}
