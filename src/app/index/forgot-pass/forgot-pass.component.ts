import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html'
})
export class ForgotPassComponent implements OnInit {
  forgotForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
  });

  log: any;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private toast: AlertToastService
  ) {}

  ngOnInit() {}

  recoverPass() {
    if (this.forgotForm.invalid) {
      return;
    }
    
    const email = this.forgotForm.get('email').value
    this.log = this.toast.info('Processing...', '', false);

    this.accountService.initRecoverPass(email).subscribe((res: any) => {
        this.toast.close(this.log);
        this.toast.success('Request Sent', 'A mail with recover information was sent to your email address.')
      }, (err: any) => {
        if (err.status === 404) {
          this.toast.danger('Oh no!', 'There is no register user with this email.')
        } else {
          this.toast.danger('Oh no!', 'It was a problem with email sending.')
        }
      });
  }
}
