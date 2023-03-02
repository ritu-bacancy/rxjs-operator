import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { of, Subject, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.css'],
})
export default class TakeUntilComponent implements OnDestroy {
  dataObs$: Subject<any> = new Subject();

  constructor(public http: HttpClient) {}

  ngOnInit(): void {}

  onClick() {
    of(1, 3, 4)
      .pipe(takeUntil(this.dataObs$))
      .subscribe((data) => {
        console.log('data..', data);
      });
  }

  checkCondition(value: any) {}

  ngOnDestroy(): void {
    this.dataObs$.next(true);
  }
}
