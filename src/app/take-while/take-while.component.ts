import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css'],
})
export class TakeWhileComponent {
  public nameControl: FormControl = new FormControl('');

  constructor() {}

  ngOnInit() {
    this.nameControl.valueChanges
      .pipe(takeWhile((value: string) => this.checkCondition(value)))
      .subscribe((data) => {
        console.log('data...', data);
      });
  }

  checkCondition(val: string) {
    return val.length < 5 ? true : false;
  }
}
