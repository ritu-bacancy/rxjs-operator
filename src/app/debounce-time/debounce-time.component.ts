import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent {
  public nameControl: FormControl = new FormControl('');

  constructor() {}

  ngOnInit() {
    this.nameControl.valueChanges.pipe(debounceTime(1000)).subscribe((data) => {
      console.log('data...', data);
    });
  }
}
