import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  styleUrls: ['./search-input.component.scss'],
  template: `
    <div class="search-input">
      <i class="search-icn fas fa-search fa-sm fa-fw"></i>
      <input
        [(ngModel)]="searchInput"
        type="text"
        [placeholder]="placeholder | titlecase"
      />
      <i
        *ngIf="searchInput"
        (click)="searchInput = ''"
        class="times-icn fas fa-times fa-sm fa-fw"
      ></i>
    </div>
  `
})
export class SearchInputComponent implements OnInit {
  @Input() placeholder: string;
  searchInput: string;

  constructor() {}

  ngOnInit() {}
}
