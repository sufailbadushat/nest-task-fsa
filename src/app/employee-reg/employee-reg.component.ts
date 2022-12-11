import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-reg',
  templateUrl: './employee-reg.component.html',
  styleUrls: ['./employee-reg.component.css']
})
export class EmployeeRegComponent {

  name = ""
  address = ""
  email = ""
  phone = ""
  username = ""
  password = ""
  cPassword = ""

  constructor(private api: ApiService) { }

  readValue = () => {
    let data: any = {
      "name": this.name,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "username": this.username,
      "password": this.password,
      "cPassword": this.cPassword
    }

    if (this.password.length != 0) {
      if (this.password == this.cPassword) {
        this.api.addEmployee(data).subscribe(
          (response: any) => {
            if (response.status == "success") {
              alert("Added successfully! \n\n goto login page");
              console.log(response);
              console.log(data);

              this.name = ""
              this.address = ""
              this.email = ""
              this.phone = ""
              this.username = ""
              this.password = ""
              this.cPassword = ""


            } else {
              alert("Something went wrong!");
            }
          }
        )
      } else {
        alert("Please enter same password");
      }
    } else {
      alert("Please enter password")
    }


  }
}