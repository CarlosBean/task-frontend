import { Component, OnInit, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { slideRightInOut } from 'src/app/animations/slide-right-in-out';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/field-config.interface';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';
import { UsersService } from '../../users/users.service';
import { ActivatedRoute } from '@angular/router';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-task-update',
  styleUrls: ['./task-update.component.scss'],
  animations: [slideRightInOut],
  host: { '[@slideRightInOut]': '' },
  template: `
    <div class="header-banner"></div>
    <div class="inner-container">
      <div class="fx j-between a-center">
        <h4>Crear Tareas</h4>
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
export class TaskUpdateComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent, { static: false })
  form: DynamicFormComponent;
  tarea: any;
  config: FieldConfig[] = [
    {
      type: 'input',
      label: 'Name',
      name: 'nombre',
      placeholder: 'Enter a name',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Description',
      name: 'descripcion',
      placeholder: 'Enter a description',
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'input',
      label: 'Alias',
      name: 'alias',
      placeholder: 'Enter an alias',
      validation: [Validators.required]
    },
    {
      type: 'date',
      label: 'Start Date',
      name: 'fechaInicio',
      placeholder: 'Start date',
      validation: []
    },
    {
      type: 'date',
      label: 'Final Date',
      name: 'fechaFin',
      placeholder: 'Final date',
      validation: []
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ];

  constructor(
    public alert: AlertToastService,
    private tareaService: TareaService,
    private route: ActivatedRoute,
  ) { 

    this.route.data.subscribe(({ tarea }) => {
      this.tarea = tarea;
      console.log(this.tarea);
    });
  }

  ngAfterViewInit() {
    if (this.tarea) this.updateForm(this.tarea);
  }

  updateForm(tarea: any) {
    this.form.setValue('nombre', tarea.nombre);
    this.form.setValue('descripcion', tarea.descripcion);
    this.form.setValue('alias', tarea.alias);
    this.form.setValue('fechaInicio', new Date(tarea.fechaInicio));
    this.form.setValue('fechaFin', new Date(tarea.fechaFin));
  }

  buildReqBody(): any {
    const body: any = this.form.value;
    // body.id = this.tarea.id;
    return body;
  }

  save() {
    if (!this.form.valid) {
      return;
    }
    // const method = this.post.id ? 'update' : 'update';
    this.tareaService.create(this.buildReqBody()).subscribe((res: any) => {
      console.log(res);
      this.alert.success('Operación Exitosa', `Tarea creada correctamente`);
      this.goBack();
    });
  }

  goBack() {
    window.history.back();
  }

}
