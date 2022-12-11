import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { HttpClientModule } from '@angular/common/http';


let myRoute:Routes=[
  {
    path:"addEmployee",
    component:EmployeeRegComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegComponent
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
