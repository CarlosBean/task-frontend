import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideIndex } from 'src/app/animations';

@Component({
  selector: 'app-index',
  animations: [slideIndex],
  styleUrls: ['./index.component.scss'],
  template: `
    <div class="container">
      <div class="top-logo fx-center">
        <i class="fab fa-angular fa-3x fa-fw text-danger"></i>
        <h2 class="m-0">ng-template</h2>
      </div>
      <div class="left-side">
        <div [@slideIndex]="prepareRoute(outlet)">
          <router-outlet #outlet="outlet"></router-outlet>
        </div>
      </div>
      <div class="right-side"></div>
    </div>
  `
})
export class IndexComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
