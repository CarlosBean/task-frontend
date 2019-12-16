import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { fadeInOut } from 'src/app/animations';
import { UsersService } from '../users.service';
import { AlertToastService } from 'src/app/shared/components/alert-toast/alert-toast.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [];

  configTopbar = {
    title: 'Usuarios Registrados',
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
    public usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.usersService.getAll().subscribe(
      (res: any) => {
        console.log('usuarios', res);
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
        this.usersService.delete(evt.id).subscribe(
          (res: any) => {
            this.alert.success(
              'Operación exitosa',
              'Usuario eliminado correctamente'
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
