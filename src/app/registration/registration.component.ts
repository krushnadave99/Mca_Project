import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { User } from "../common";
import { CommonserviceService } from "../commonservice.service";

@Component({
  selector: "app-registration",
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: "./registration.component.html",
  styleUrl: "./registration.component.scss",
})
export class RegistrationComponent {
  UserList = new User();
  strErr:any;
  constructor(
    public router: Router,
    // public Commonservice: CommonserviceService
  ) {}
  onSubmitRegistration() {
    if (!this.UserList.username) {
      this.strErr+='User name is Required..'
    }
    if (!this.UserList.password) {
      this.strErr+='Password is Required..'
    }
    if (!this.UserList.email) {
      this.strErr+='Email is Required..'
    }
    if (!this.UserList.phoneno) {
      this.strErr+='Phoneno is Required..'
    }
    // if (this.UserList) {
    //   this.Commonservice.userRegistration(this.UserList).subscribe((e) => {
    //     if (e) {
    //       console.log(e);
    //       this.router.navigate(['login']);
    //     }
    //   });
    // }
    this.router.navigate(['login']);
  }
}
