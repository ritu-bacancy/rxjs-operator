import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  dataObs$: Subject<any> = new Subject();

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.dataObs$
      .pipe(take(1))
      .subscribe((data) => console.log('data2..', data));
  }

  onClick() {
    this.http
      .get('https://gorest.co.in/public/v2/comments')
      .subscribe((data) => {
        this.dataObs$.next(data);
      });
  }
}
