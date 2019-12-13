import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from 'src/app/shared/components/dynamic-form/dynamic-form.component';
import { Validators } from '@angular/forms';
import { FieldConfig } from 'src/app/shared/models/field-config.interface';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';
import { ActivatedRoute } from '@angular/router';
import { ProyectService } from '../proyect.service';
import { slideRightInOut } from 'src/app/animations/slide-right-in-out';
import { UsersService } from '../../users/users.service';

@Component({
  selector: 'app-proyect-update',
  styleUrls: ['./proyect-update.component.scss'],
  animations: [slideRightInOut],
  host: { '[@slideRightInOut]': '' },
  template: `
    <div class="header-banner"></div>
    <div class="inner-container">
      <div class="fx j-between a-center">
        <h4>Crea un Proyecto</h4>
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
export class ProyectUpdateComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent, { static: false })
  form: DynamicFormComponent;
  proyecto: any;
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
      validation: [Validators.required, Validators.minLength(4)]
    },
    {
      type: 'select',
      label: 'Usuarios Asignados',
      name: 'usuarioList',
      options: [],
      placeholder: 'Select an user',
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
    private proyectService: ProyectService,
    private usuarioService: UsersService,
    private route: ActivatedRoute,
  ) {
    this.route.data.subscribe(({ proyecto }) => {
      this.proyecto = proyecto;
      console.log(this.proyecto);
    });

    this.usuarioService.getAll().subscribe((res: any) => {
      this.config[3].options = res.content;
    });
  }

  ngAfterViewInit() {
    if (this.proyecto) this.updateForm(this.proyecto);
  }

  updateForm(proyecto: any) {
    this.form.setValue('nombre', proyecto.nombre);
    this.form.setValue('descripcion', proyecto.descripcion);
    this.form.setValue('alias', proyecto.alias);
    this.form.setValue('fechaInicio', new Date(proyecto.fechaInicio));
    this.form.setValue('fechaFin', new Date(proyecto.fechaFin));
  }

  buildReqBody(): any {
    const body: any = this.form.value;
    console.log(this.form.value);
    // body.id = this.proyecto.id;
    return body;
  }

  save($event) {
    if (!this.form.valid) {
      console.log('invalido', $event);
      return;
    }
    // const method = this.post.id ? 'update' : 'update';
    this.proyectService.create(this.buildReqBody()).subscribe((res: any) => {
      console.log(res);
      this.alert.success('Operación Exitosa', `Proyecto creado correctamente`);
      this.goBack();
    });
  }

  goBack() {
    window.history.back();
  }
}
