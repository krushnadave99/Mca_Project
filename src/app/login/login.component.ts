
import { GoogleSigninButtonModule, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,GoogleSigninButtonModule,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoginComponent {
  user: SocialUser | undefined;
  loggedIn: boolean=false;
  constructor(
    private authServicce: SocialAuthService,
    private router: Router
  ) { }
  ngOnInit() {
    this.authServicce.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.router.navigate(['home'])
      this.loggedIn = (user != null);
    });
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  get login() { return this.loginForm.controls; }
  onSubmitLogin() {
    // console.log(this.loginForm.value);
    // this.router.navigate(['home']);
  }
}
