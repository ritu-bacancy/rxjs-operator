import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { TakeWhileComponent } from './take-while/take-while.component';

const routes: Routes = [
  { path: 'debounceTime', component: DebounceTimeComponent },
  { path: 'distinct-until-changed', component: DistinctUntilChangedComponent },
  { path: 'takeWhile', component: TakeWhileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
