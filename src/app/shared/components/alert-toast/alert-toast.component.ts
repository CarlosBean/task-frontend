import { Component, Input } from '@angular/core';
import { ICustomAlert } from '../../models/custom-alert.model';

@Component({
  selector: 'app-alert',
  styleUrls: ['./alert-toast.component.scss'],
  template: `
    <div class="custom-alert" [ngClass]="config.alertType">
      <span class="icon-alert">
        <i class="fas {{ config.icon }} fa-3x fa-fw"></i>
      </span>
      <div class="info-alert">
        <h6 class="text-upper">{{ config.title }}</h6>
        <p>{{ config.text }}</p>
      </div>
    </div>
  `
})
export class AlertToastComponent {
  @Input() config: ICustomAlert;
}
