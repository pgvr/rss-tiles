import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeIn } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeIn],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      // tslint:disable-next-line: no-string-literal
      outlet.activatedRouteData['animation']
    );
  }
}
