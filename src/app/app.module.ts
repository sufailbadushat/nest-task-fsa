import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';


let myRoute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"adminLogin",
    component:AdminLoginComponent
  },  {
    path:"addEmployee",
    component:EmployeeRegComponent
  },
  {
    path:"employeeLogin",
    component:EmployeeLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegComponent,
    AdminLoginComponent,
    EmployeeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
