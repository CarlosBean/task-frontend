import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/field-config.interface';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { IUser } from 'src/app/shared/models/user';
import { slideRightInOut } from 'src/app/animations';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-update',
  styleUrls: ['./user-update.component.scss'],
  animations: [slideRightInOut],
  host: { '[@slideRightInOut]': '' },
  template: `
    <div class="header-banner"></div>
    <div class="inner-container">
      <h4>Add Users</h4>
      <app-dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="save($event)"
      >
      </app-dynamic-form>
    </div>
  `
})
export class UserUpdateComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent, { static: false })
  form: DynamicFormComponent;
  user: IUser;
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Document',
      name: 'cedula',
      placeholder: 'Enter a document',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Name',
      name: 'nombre',
      placeholder: 'Enter a name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter an email',
      validation: [Validators.required, Validators.email]
    },
    {
      type: 'input',
      label: 'Password',
      name: 'password',
      placeholder: 'Enter a passsword',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  constructor(private userService: UsersService, private route: ActivatedRoute) {
    this.route.data.subscribe(({ user }) => this.user = user);
  }

  ngAfterViewInit() {
    if(this.user)
    this.updateForm(this.user);
  }

  updateForm(user: any) {
    this.form.setValue('cedula', user.cedula);
    this.form.setValue('nombre', user.nombre);
    this.form.setValue('email', user.email);
    this.form.setValue('password', user.password);
  }

  buildReqBody(): any {
    const body: any = this.form.value;
    // body.id = this.user.id;
    return body;
  }

  save() {
    if (!this.form.valid) { return; }
    // const method = this.post.id ? 'update' : 'update';
    this.userService.create(this.buildReqBody()).subscribe();
  }
}
