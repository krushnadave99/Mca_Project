import {
  GoogleSigninButtonModule,
  SocialAuthService,
  SocialUser,
} from "@abacritt/angularx-social-login";
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import {
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { User } from "../common";
import { CommonserviceService } from "../commonservice.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [
    RouterLink,
    GoogleSigninButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginComponent {
  user: SocialUser | undefined;
  loggedIn: boolean = false;
  UserList = new User();
  strErr: any;
  constructor(
    private authServicce: SocialAuthService,
    private router: Router,
    // public Commonservice: CommonserviceService
  ) {}
  ngOnInit() {
    this.authServicce.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.router.navigate(["home"]);
      this.loggedIn = user != null;
    });
  }

  onSubmitLogin() {
    if (!this.UserList.email) {
      this.strErr = "Email is Required.";
    }
    if (!this.UserList.password) {
      this.strErr = "Password is Required.";
    }
    // this.Commonservice.userLogin(this.UserList).subscribe((e) => {
    //   if(e){
    //     console.log(e);
        this.router.navigate(["home"]);
    //   }
    // });
  }
}
