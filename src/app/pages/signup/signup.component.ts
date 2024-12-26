import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  @ViewChild('signup') signup!: NgForm;
  checklogin() {
    console.log(this.signup.value);
    this.signup.reset();
  }
}
