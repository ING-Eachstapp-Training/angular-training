import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.Login(this.loginForm.controls['email'].value).subscribe(
        (res) => {
          localStorage.setItem('token', res);
          this.router.navigate(['/todo']);
        },
        (err: HttpErrorResponse) => {
          this.loginForm.controls['email'].setErrors({ notExist: true });
        }
      );
    }
  }
}
