import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.css'],
})
export class MergeMapComponent {
  constructor(public http: HttpClient) {}

  onClick() {
    this.http
      .get('https://gorest.co.in/public/v2/comments')
      .pipe(
        mergeMap((val: any) => {
          return this.http.get('https://gorest.co.in/public/v2/todos');
        })
      )
      .subscribe((val) => {
        console.log('data..', val);
      });
  }
}
