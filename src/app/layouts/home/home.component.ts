import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInOut } from 'src/app/animations';

@Component({
  selector: 'app-main',
  styleUrls: ['./home.component.scss'],
  animations: [fadeInOut],
  template: `
    <div class="grid-container">
      <app-sidebar class="sidenav"></app-sidebar>
      <main class="main" [@fadeInOut]="prepareRoute(outlet)">
        <router-outlet #outlet="outlet"></router-outlet>
      </main>
    </div>
  `
})
export class HomeComponent {
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
