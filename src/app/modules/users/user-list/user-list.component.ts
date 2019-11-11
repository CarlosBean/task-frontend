import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  searchInput: string;
  btns = [
    { name: 'Users', selected: true },
    { name: 'Employees', selected: false }
  ];

  users = [
    { id: 1, name: 'Carlos De la Cruz', quantity: 10, status: true },
    { id: 2, name: 'Andres Gonzales', quantity: 15, status: true },
    { id: 3, name: 'Didier Perez', quantity: 8, status: true },
    { id: 4, name: 'Ofelia Nuñez', quantity: 22, status: true }
  ];

  constructor() {}

  selectBtn(btn: any) {
    this.btns.find(btn => btn.selected && (btn.selected = false));
    btn.selected = !btn.selected;
  }

  executeAction(action: string) {
    console.log(action);
  }
}
