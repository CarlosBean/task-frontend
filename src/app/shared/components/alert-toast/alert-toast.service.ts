import {
  Injectable,
  Injector,
  ApplicationRef,
  ComponentFactoryResolver
} from '@angular/core';
import { ICustomAlert, CustomAlert } from '../../models/custom-alert.model';
import { AlertToastComponent } from './alert-toast.component';

@Injectable({
  providedIn: 'root'
})
export class AlertToastService {
  icons = {
    success: 'fa-check-circle',
    danger: 'fa-times-circle',
    warning: 'fa-exclamation-triangle',
    info: 'fa-info-circle'
  };

  constructor(
    private injector: Injector,
    private applicationRef: ApplicationRef,
    private resolver: ComponentFactoryResolver
  ) {}

  show(config: ICustomAlert) {
    const alertbox = document.createElement('alertbox-component');
    const factory = this.resolver.resolveComponentFactory(AlertToastComponent);
    const component = factory.create(this.injector, [], alertbox);

    this.applicationRef.attachView(component.hostView);

    if (config.autoclose) {
      setTimeout(() => this.close(component), 2000);
    }

    component.instance.config = config;
    const container = document.getElementById('alert-container');
    container.appendChild(alertbox);
    return component;
  }

  close(component: any) {
    this.applicationRef.detachView(component.hostView);
    component.destroy();
  }

  success(title: string, text: string, autoclose = true) {
    const alert = new CustomAlert('success', title, text, autoclose, this.icons.success);
    return this.show(alert);
  }

  danger(title: string, text: string, autoclose = true) {
    const alert = new CustomAlert('danger', title, text, autoclose, this.icons.danger);
    return this.show(alert);
  }

  warning(title: string, text: string, autoclose = true) {
    const alert = new CustomAlert('warning', title, text, autoclose, this.icons.warning);
    return this.show(alert);
  }

  info(title: string, text: string, autoclose = true) {
    const alert = new CustomAlert('info', title, text, autoclose, this.icons.info);
    return this.show(alert);
  }
}
