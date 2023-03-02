import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { DistinctUntilChangedComponent } from './distinct-until-changed/distinct-until-changed.component';
import { TakeWhileComponent } from './take-while/take-while.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';
import { HttpClientModule } from '@angular/common/http';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { TakeComponent } from './take/take.component';
import TakeUntilComponent from './take-until/take-until.component';
import { MergeMapComponent } from './merge-map/merge-map.component';

@NgModule({
  declarations: [
    AppComponent,
    DebounceTimeComponent,
    DistinctUntilChangedComponent,
    TakeWhileComponent,
    ForkJoinComponent,
    SwitchMapComponent,
    TakeComponent,
    TakeUntilComponent,
    MergeMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
