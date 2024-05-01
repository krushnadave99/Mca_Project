import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  constructor(public router:Router){}
  registrationForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
  })
  get registration() { return this.registrationForm.controls; }
  onSubmitRegistration() {
    // this.router.navigate(['login'])
    // console.log(this.registrationForm.value);
    // console.log("login");
  }
}
