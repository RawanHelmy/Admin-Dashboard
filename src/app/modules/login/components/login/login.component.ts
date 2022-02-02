import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });
  show_error = false;
  loading: boolean = false;
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    this.loginService.logout(); // clears local storage
  }
  onSubmit() {
    this.loginService
      .login({
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      })
      .subscribe((res) => {
        if (res.error) {
          this.show_error = true; // shows default error when backend responses
        }
        this.show_error = false;
      });
  }
}
