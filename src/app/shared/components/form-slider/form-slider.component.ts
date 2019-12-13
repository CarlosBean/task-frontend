import { Component, OnInit, HostBinding } from '@angular/core';
import { FieldConfig } from '../../models/field-config.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-slider',
  template: `
    <mat-form-field appearance="none" [formGroup]="group" floatLabel="always">
    <mat-label>{{ config.label}}</mat-label>
        <mat-slide-toggle [formControlName]="config.name"></mat-slide-toggle>
        <textarea matInput hidden></textarea>
    </mat-form-field>
  `,
  styleUrls: ['./form-slider.component.scss']
})
export class FormSliderComponent implements OnInit {

  @HostBinding('style.grid-area') gridArea: string;
  config: FieldConfig;
  group: FormGroup;

  ngOnInit() {
    this.gridArea = this.config.name;
  }

}
