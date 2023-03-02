import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError, forkJoin, of, retry } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css'],
})
export class ForkJoinComponent {
  response: any = [];

  constructor(public http: HttpClient) {}

  ngOnInit() {}

  apicall() {
    const request1 = this.http
      .get('https://gorest.co.in/public/v2/todos')
      .pipe(catchError(() => of('err 1')));
    const request2 = this.http
      .get('https://gorest.co.in/public/v2/users')
      .pipe(catchError(() => of('err 2')));
    const request3 = this.http
      .get('https://gorest.co.in/public/v2/posts')
      .pipe(catchError(() => of('err 3')));
    const request4 = this.http
      .get('https://gorest.co.in/public/v2/comments	')
      .pipe(catchError(() => of('err 4')));

    forkJoin([request1, request2, request3, request4]).subscribe((results) => {
      console.log(results);
      this.response = results;
    });
  }
}
