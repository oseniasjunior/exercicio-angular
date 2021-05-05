import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeItemComponent} from './employee/employee-item/employee-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeService} from './services/employee-service';
import {HttpClientModule} from '@angular/common/http';
import {DepartmentComponent} from './department/department.component';
import {DepartmentItemComponent} from './department/department-item/department-item.component';
import {BaseService} from './services/base-service';
import {ZoneComponent} from './zone/zone.component';
import {ZoneItemComponent} from './zone/zone-item/zone-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeItemComponent,
    DepartmentComponent,
    DepartmentItemComponent,
    ZoneComponent,
    ZoneItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FlexModule,
  ],
  providers: [
    EmployeeService,
    BaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
