import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/field-config.interface';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { IUser } from 'src/app/shared/models/user';
import { slideRightInOut } from 'src/app/animations';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';

@Component({
  selector: 'app-user-update',
  styleUrls: ['./user-update.component.scss'],
  animations: [slideRightInOut],
  host: { '[@slideRightInOut]': '' },
  template: `
    <div class="header-banner"></div>
    <div class="inner-container">
      <div class="fx j-between a-center">
        <h4>Add Users</h4>
        <button (click)="goBack()">
          <i class="fas fa-times fa-lg fa-fw text-green"></i>
        </button>
      </div>
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

  constructor(
    public alert: AlertToastService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.data.subscribe(({ user }) => {
      this.user = user;
      this.config.push({
        type: 'slider',
        label: 'Estado',
        name: 'estado',
        placeholder: 'Enter a state',
        validation: []
      });
    });
  }

  ngAfterViewInit() {
    if (this.user) {
      this.updateForm(this.user);
    }
  }

  updateForm(user: any) {
    this.form.setValue('cedula', user.cedula);
    this.form.setValue('nombre', user.nombre);
    this.form.setValue('email', user.email);
    this.form.setValue('password', user.password);
    this.form.setValue('estado', user.estado);
  }

  buildReqBody(): any {
    const body: any = this.form.value;
    if (this.user.id) {
      body.id = this.user.id
    }
    return body;
  }

  save() {
    if (!this.form.valid) {
      return;
    }
    const method = this.user.id ? 'update' : 'create';
    this.userService[method](this.buildReqBody()).subscribe((res: any) => {
      console.log(res);
      this.alert.success('Operación Exitosa', `Usuario ${method} correctamente`);
      this.goBack();
    });
  }

  goBack() {
    window.history.back();
  }
}
