import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div class="card" [class.card-checked]="user.checked">
      <div class="card-body">
        <div>
          <p class="mb-1">{{ user.cedula }}</p>
          <h6 class="m-0">{{ user.nombre }}</h6>
        </div>
        <div>
          <p class="light-text mb-1">{{ user.quantity }} Proyectos</p>
          <p class="light-text mb-1">{{ user.quantity }} Tareas</p>
          <small>{{ user.estado ? 'activo' : 'inactivo' }}</small>
        </div>
      </div>
      <div class="card-options">
        <input
          [(ngModel)]="user.checked"
          type="checkbox"
          (ngModelChange)="
            action.emit({ id: user.id, action: 'check', status: user.checked })
          "
        />
        <button [disabled]="user.checked">
          <i class="fas fa-user fa-sm fa-fw"></i>
        </button>
        <button
          [disabled]="user.checked"
          (click)="action.emit({ id: user.id, action: 'edit' })"
        >
          <i class="fas fa-pen fa-sm fa-fw"></i>
        </button>
        <button
          [disabled]="user.checked"
          (click)="action.emit({ id: user.id, action: 'delete' })"
        >
          <i class="fas fa-times fa-sm fa-fw"></i>
        </button>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() user: IUser;
  @Output() action = new EventEmitter<any>();
}
