import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styleUrls: ['./take-while.component.css'],
})
export class TakeWhileComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
    });

    this.form
      .get('name')
      ?.valueChanges.pipe(
        takeWhile((value: string) => this.checkCondition(value))
      )
      .subscribe((data) => {
        console.log('data...', data);
      });
  }

  checkCondition(val: string) {
    console.log('val.length..', val.length);
    return val.length < 5 ? true : false;
  }
}
