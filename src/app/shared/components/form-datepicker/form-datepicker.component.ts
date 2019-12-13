import { Component, OnInit, HostBinding } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-datepicker',
  template:`
    <mat-form-field [formGroup]="group" class="w-100" >
      <input matInput [formControlName]="config.name" [min]="minDate" [matDatepicker]="picker" [placeholder]="config.placeholder">
      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
      <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  `
})
export class FormDatepickerComponent implements OnInit {
  @HostBinding('style.grid-area') gridArea: string;
  config: FieldConfig;
  group: FormGroup;

  minDate = new Date();

  ngOnInit() {
    this.gridArea = this.config.name;
  }

}
