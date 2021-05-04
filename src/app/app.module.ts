import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {EmployeeItemComponent} from './employee/employee-item/employee-item.component';
import {FormsModule} from '@angular/forms';
import {EmployeeService} from './services/employee-service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
