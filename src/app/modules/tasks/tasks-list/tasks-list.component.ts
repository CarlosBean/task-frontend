import { Component, OnInit } from '@angular/core';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';
import { ProyectService } from '../../proyects/proyect.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TareaService } from '../tarea.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {

  users = [];

  configTopbar = {
    title: 'Tareas Registradas',
    placeholder: 'search account',
    button: { action: 'new', name: 'new' },
    filter: [
      { type: 'ASC', name: 'ascending' },
      { type: 'DESC', name: 'descending' }
    ],
    menus: []
  };

  selected = [];

  constructor(
    public alert: AlertToastService,
    public tareaService: TareaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.tareaService.getAll().subscribe(
      (res: any) => {
        console.log(res);
        this.users = res.content;
      },
      err => {
        console.log(err);
      }
    );
  }

  getTopbarEvt(action: string) {
    switch (action) {
      case 'new':
        this.router.navigate(['new'], { relativeTo: this.route });
        // this.router.navigateByUrl('dashboard/proyects/new');
        break;

      default:
        console.log(action);
        break;
    }
  }

  getCardEvt(evt: any, index: number) {
    switch (evt.action) {
      case 'check':
        this.selected = evt.status
          ? [...this.selected, evt.id]
          : this.selected.filter(card => card !== evt.id);
        break;
      case 'delete':
        this.tareaService.delete(evt.id).subscribe(
          (res: any) => {
            this.alert.success(
              'Operación exitosa',
              'Tarea eliminada correctamente'
            );
            this.users.splice(index, 1);
          },
          err => {
            console.log('ERROR DELETE', err);
          }
        );
        break;
      case 'edit':
        this.router.navigate(['update', evt.id], { relativeTo: this.route });
        console.log('edit');
        break;
      default:
        console.log(evt);
        break;
    }
  }
}
