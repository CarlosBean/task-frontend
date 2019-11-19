import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/field-config.interface';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { IUser } from 'src/app/shared/models/user';
import { slideRightInOut } from 'src/app/animations';

@Component({
  selector: 'app-user-update',
  styleUrls: ['./user-update.component.scss'],
  animations: [slideRightInOut],
  host: { '[@slideRightInOut]': '' },
  template: `
    <div class="header-banner"></div>
    <div class="inner-container">
      <h4>Add Employees</h4>
      <app-dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)"
      >
      </app-dynamic-form>
    </div>
  `
})
export class UserUpdateComponent implements OnInit {
  @ViewChild(DynamicFormComponent, { static: false })
  form: DynamicFormComponent;
  user: IUser;
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Username',
      name: 'username',
      placeholder: 'Enter your username',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Name',
      name: 'name',
      placeholder: 'Enter your name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Email',
      name: 'email',
      placeholder: 'Enter your email',
      validation: [Validators.required, Validators.email]
    },
    {
      type: 'input',
      label: 'Website',
      name: 'website',
      placeholder: 'Enter your website',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      type: 'select',
      label: 'Favourite Sport',
      name: 'sport',
      options: ['football', 'basketball', 'hockey'],
      placeholder: 'Select an option',
      validation: [Validators.required]
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
