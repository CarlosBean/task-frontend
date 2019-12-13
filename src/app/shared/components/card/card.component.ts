import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-card',
  styleUrls: ['./card.component.scss'],
  template: `
    <div *ngIf="cardType === 'usuario'" class="card" [class.card-checked]="item.checked">
      <div class="card-body">
        <div>
          <p class="mb-1">{{ item.cedula }}</p>
          <h6 class="m-0">{{ item.nombre }}</h6>
        </div>
        <div>
          <p class="light-text mb-1">{{ item.quantity }} Proyectos</p>
          <p class="light-text mb-1">{{ item.quantity }} Tareas</p>
          <small>{{ item.estado ? 'activo' : 'inactivo' }}</small>
        </div>
      </div>
      <div class="card-options">
        <input
          [(ngModel)]="item.checked"
          type="checkbox"
          (ngModelChange)="
            action.emit({ id: item.id, action: 'check', status: item.checked })
          "
        />
        <button [disabled]="item.checked">
          <i class="fas fa-item fa-sm fa-fw"></i>
        </button>
        <button
          [disabled]="item.checked"
          (click)="action.emit({ id: item.id, action: 'edit' })"
        >
          <i class="fas fa-pen fa-sm fa-fw"></i>
        </button>
        <button
          [disabled]="item.checked"
          (click)="action.emit({ id: item.id, action: 'delete' })"
        >
          <i class="fas fa-times fa-sm fa-fw"></i>
        </button>
      </div>
    </div>

    <div *ngIf="cardType === 'proyecto' || cardType === 'tarea'" class="card" [class.card-checked]="item.checked">
      <div class="card-body">
        <div>
          <h6 class="m-0">{{ item.nombre }}</h6>
          <p class="mb-1">{{ item.alias }}</p>
        </div>
        <div>
          <p class="light-text mb-1">{{ item.fechaInicio | date }} Inicio</p>
          <p class="light-text mb-1">{{ item.fechaFin | date}} Fin</p>
          <small>{{ item.estado ? 'activo' : 'inactivo' }}</small>
        </div>
      </div>
      <div class="card-options">
        <input
          [(ngModel)]="item.checked"
          type="checkbox"
          (ngModelChange)="
            action.emit({ id: item.id, action: 'check', status: item.checked })
          "
        />
        <button [disabled]="item.checked">
          <i class="fas fa-item fa-sm fa-fw"></i>
        </button>
        <button
          [disabled]="item.checked"
          (click)="action.emit({ id: item.id, action: 'edit' })"
        >
          <i class="fas fa-pen fa-sm fa-fw"></i>
        </button>
        <button
          [disabled]="item.checked"
          (click)="action.emit({ id: item.id, action: 'delete' })"
        >
          <i class="fas fa-times fa-sm fa-fw"></i>
        </button>
      </div>
    </div>
  `
})
export class CardComponent {
  @Input() cardType: string;
  @Input() item: any;
  @Output() action = new EventEmitter<any>();
}
