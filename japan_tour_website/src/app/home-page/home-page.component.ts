import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
<div id="container" class="h-100 pt-5 d-flex flex-column">
  <div id="top" class="w-100 h-100 pt-5">

    <section id="landingSign" class="my-5 py-5 text-center">
      <h1 id="landingh1" class="display-1 m-4">Japan Tours</h1>
      <h3>A start up to your japanese experience</h3>
    </section>
  </div>
  <div class="bottom">
    <!-- overlapping boxes to the right -->
    <div class="rboxt w-25 h-25" style="border: 1px solid red;">

    </div>
    <div class="rboxb" style="border: 1px solid blue;">

    </div>
  </div>
</div>
  `,
  styles: [`
    #top {
      background-image: url('/assets/Japan_home.jpg') !important;
      background-size: cover;
      background-position: center;
      /* height: 90%; */
    }
    h1 {
      font-family: 'Righteous', sans-serif;
    }
  `]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
