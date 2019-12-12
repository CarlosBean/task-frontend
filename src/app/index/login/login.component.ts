import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    if (this.loginForm.invalid) {
      alert(`There's an error with the credentials`);
      return;
    }

    this.accountService.login(this.loginForm.value).subscribe(
      (res: any) => {
        if (res.success) {
          console.log('login successful');
          this.router.navigateByUrl('/dashboard');
        }
      },
      (err: any) => {
        alert(err.error.message);
      }
    );
  }
}
