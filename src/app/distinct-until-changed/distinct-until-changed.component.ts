import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css'],
})
export class DistinctUntilChangedComponent {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
    });

    this.form
      .get('name')
      ?.valueChanges.pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((data) => {
        console.log('data...', data);
      });
  }
}
