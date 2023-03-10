import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import TakeUntilComponent from './take-until/take-until.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { TakeComponent } from './take/take.component';

const routes: Routes = [
  { path: 'debounceTime', component: DebounceTimeComponent },
  { path: 'distinct-until-changed', component: DistinctUntilChangedComponent },
  { path: 'takeWhile', component: TakeWhileComponent },
  { path: 'forkJoin', component: ForkJoinComponent },
  { path: 'switchMap', component: SwitchMapComponent },
  { path: 'take', component: TakeComponent },
  { path: 'takeUntil', component: TakeUntilComponent },
  { path: 'mergeMap', component: MergeMapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
