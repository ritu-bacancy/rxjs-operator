import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent {
  constructor(public http: HttpClient) {}

  onClick() {
    this.http
      .get('https://gorest.co.in/public/v2/comments')
      .pipe(take(1))
      .subscribe((data) => {
        console.log('data..', data);
      });
  }
}
