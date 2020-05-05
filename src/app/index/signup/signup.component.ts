import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AccountService } from '../account.service';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  hide = true;
  signupForm = this.fb.group({
    nombre: ['', [Validators.required]],
    cedula: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
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

  signup() {
    if (this.signupForm.invalid) {
      return;
    }

    this.log = this.toast.info('Creating account...', '', false);

    this.accountService.signup(this.signupForm.value).subscribe(
      (res: any) => {
        this.toast.close(this.log);
        this.router.navigateByUrl('/dashboard');
      },
      (err: any) => {
        this.toast.danger('Oh no!', 'An savage error has appeared');
      }
    )
  }
}
