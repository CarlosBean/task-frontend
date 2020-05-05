import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm = this.fb.group({
    cedula: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  log: any;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private toast: AlertToastService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    if (this.loginForm.invalid) {
      return;
    }

    this.log = this.toast.info('Logging...', '', false);

    this.accountService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.toast.close(this.log);
        this.router.navigateByUrl('/dashboard');
      },
      (err: any) => {
        this.toast.close(this.log);
        this.toast.danger('Incorrect Credentials', `There's an error with the credentials`);
      }
    );
  }
}
