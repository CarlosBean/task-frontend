import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../models/field.interface';
import { FieldConfig } from '../../models/field-config.interface';

@Component({
  selector: 'app-form-select',
  template: `
    <mat-form-field
      [formGroup]="group"
      class="w-100"
      [style.grid-area]="config.name"
    >
      <mat-label>{{ config.label }}</mat-label>
      <mat-select [formControlName]="config.name" disableRipple multiple>
        <mat-option *ngFor="let option of config.options" [value]="option">
          {{ option.nombre }}
        </mat-option>
      </mat-select>

      <mat-error *ngIf="group.get(config.name).errors?.required">
        {{ config.label }} is <strong>required</strong>
      </mat-error>
    </mat-form-field>
  `
})
export class FormSelectComponent implements Field {
  config: FieldConfig;
  group: FormGroup;
}
