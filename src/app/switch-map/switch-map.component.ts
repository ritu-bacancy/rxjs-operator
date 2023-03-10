import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css'],
})
export class SwitchMapComponent {
  constructor(public http: HttpClient) {}

  onClick() {
    this.http
      .get('https://gorest.co.in/public/v2/comments')
      .pipe(
        switchMap((val: any) => {
          return this.http.get('https://gorest.co.in/public/v2/todos');
        })
      )
      .subscribe((data) => {
        console.log('data..', data);
      });
  }
}
