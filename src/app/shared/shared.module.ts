import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MaterialModule } from './material.module';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { AlertToastComponent } from './components/alert-toast/alert-toast.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';

@NgModule({
  declarations: [
    CardComponent,
    TopbarComponent,
    SearchInputComponent,
    DynamicFormComponent,
    FormInputComponent,
    FormButtonComponent,
    FormSelectComponent,
    //AlertToastComponent,
    DynamicFieldDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CardComponent,
    TopbarComponent,
    DynamicFormComponent
    //AlertToastComponent
  ],
  entryComponents: [
    FormInputComponent,
    FormButtonComponent,
    FormSelectComponent
    //AlertToastComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
