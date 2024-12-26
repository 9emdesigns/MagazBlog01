import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @ViewChild('login') login!: NgForm;
  checklogin() {
    console.log(this.login.value);
    this.login.reset();
  }
}
