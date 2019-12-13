import { Component, OnInit } from '@angular/core';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';
import { ProyectService } from '../proyect.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proyects-list',
  templateUrl: './proyects-list.component.html',
  styleUrls: ['./proyects-list.component.scss']
})
export class ProyectsListComponent implements OnInit {

  users = [];

  configTopbar = {
    title: 'Proyectos Registrados',
    placeholder: 'search account',
    button: { action: 'new', name: 'new' },
    filter: [
      { type: 'ASC', name: 'ascending' },
      { type: 'DESC', name: 'descending' }
    ],
    /* fabs: [
      { action: 'status', icon: 'fas fa-user-alt-slash', class: 'btn-warning' },
      { action: 'delete', icon: 'fas fa-trash', class: 'btn-danger' },
      { action: 'delete', icon: 'fas fa-trash', class: 'btn-danger' },
      { action: 'delete', icon: 'fas fa-trash', class: 'btn-danger' },
      { action: 'delete', icon: 'fas fa-trash', class: 'btn-danger' }
    ] */
    menus: [
      /* { rsrc: 'users', name: 'users', selected: true },
      { rsrc: 'employees', name: 'employees', selected: false },
      { rsrc: 'admins', name: 'admins', selected: false },
      { rsrc: 'super', name: 'super', selected: false } */
    ]
  };

  selected = [];

  constructor(
    public alert: AlertToastService,
    public proyectService: ProyectService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.proyectService.getAll().subscribe(
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
        this.proyectService.delete(evt.id).subscribe(
          (res: any) => {
            this.alert.success(
              'Operación exitosa',
              'Proyecto eliminado correctamente'
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
