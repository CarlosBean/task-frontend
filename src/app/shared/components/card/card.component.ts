import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from '../../models/user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() user: IUser;
  @Output() action = new EventEmitter<any>();
}
