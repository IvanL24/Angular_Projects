import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand justify-content-center bg-secondary">
    <ul class="navbar-nav d-flex justify-content-around w-50 my-1">
        <li class="nav-item px-4"><a class="nav-link text-light" routerLink="/">Home</a></li>
        <li class="nav-item px-4"><a class="nav-link text-light" routerLink="/gallery">Gallery</a></li>
        <li class="nav-item px-4"><a class="nav-link text-light" routerLink="/contact">Contact</a></li>
      </ul>
    </nav>
  `,
  styles: [`
    li {
      border-radius: 10px
    }
    li:hover {
      background: #4a4d52;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
