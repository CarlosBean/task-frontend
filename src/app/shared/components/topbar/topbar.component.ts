import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  @Input() config: any;
  @Output() action = new EventEmitter<string>();
  searchInput: string;

  selectBtn(btn: any) {
    this.config.menus.find(btn => btn.selected && (btn.selected = false));
    btn.selected = !btn.selected;
    this.action.emit(btn.rsrc);
  }
}
