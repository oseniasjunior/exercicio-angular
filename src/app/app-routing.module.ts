import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeItemComponent} from './employee/employee-item/employee-item.component';
import {DepartmentComponent} from './department/department.component';
import {DepartmentItemComponent} from './department/department-item/department-item.component';
import {ZoneItemComponent} from './zone/zone-item/zone-item.component';
import {ZoneComponent} from './zone/zone.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/:action', component: EmployeeItemComponent},
  {path: 'department', component: DepartmentComponent},
  {path: 'department/:action', component: DepartmentItemComponent},
  {path: 'zone', component: ZoneComponent},
  {path: 'zone/:action', component: ZoneItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
