import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: "app-contactus",
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: "./contactus.component.html",
  styleUrl: "./contactus.component.scss",
})
export class ContactusComponent {

  contactForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(8),
    ]),
    message: new FormControl("", [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(1000),
    ]),
    mobile: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
    ]),
  });
  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}
