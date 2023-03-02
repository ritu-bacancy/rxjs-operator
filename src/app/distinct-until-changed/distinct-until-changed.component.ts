import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css'],
})
export class DistinctUntilChangedComponent {
  public nameControl: FormControl = new FormControl('');

  constructor() {}

  ngOnInit() {
    this.nameControl.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((data) => {
        console.log('data...', data);
      });
  }
}
