import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header class="position-absolute w-100"></app-header>

    <!-- router -->
    <router-outlet></router-outlet>
    <!-- footer -->

  `,
  styleUrls: []
})
export class AppComponent {
  title = 'japan_tour_website';
}
