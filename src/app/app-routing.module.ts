import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeItemComponent} from './employee/employee-item/employee-item.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'employee/:action', component: EmployeeItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
