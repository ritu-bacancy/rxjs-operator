import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rxjs-operators';

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
