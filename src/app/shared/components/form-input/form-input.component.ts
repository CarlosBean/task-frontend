import { Component, OnInit, HostBinding } from '@angular/core';
import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  template: `
    <mat-form-field [formGroup]="group" class="w-100">
      <mat-label>{{ config.label }}</mat-label>
      <input
        matInput
        [placeholder]="config.placeholder"
        [formControlName]="config.name"
        autocomplete="off"
      />

      <mat-error *ngIf="group.get(config.name).errors?.required">
        {{ config.label }} is <strong>required</strong>
      </mat-error>

      <mat-error *ngIf="group.get(config.name).errors?.email">
        Invalid email address
      </mat-error>

      <mat-error *ngIf="group.get(config.name).errors?.minlength">
        {{ config.label }} must have at least 4 characters
      </mat-error>
    </mat-form-field>
  `
})
export class FormInputComponent implements Field, OnInit {
  @HostBinding('style.grid-area') gridArea: string;
  config: FieldConfig;
  group: FormGroup;

  ngOnInit() {
    this.gridArea = this.config.name;
  }
}
