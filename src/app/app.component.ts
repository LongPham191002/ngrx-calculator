import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Store} from "@ngrx/store";
import {AsyncPipe, DatePipe} from "@angular/common";
import { increase, decrease, setCount, reset } from './ngrx/counter/counter.actions';
import {CounterState} from "./ngrx/counter/counter.state";
import * as CounterActions from './ngrx/counter/counter.actions';
import {Observable, Subscription} from "rxjs";
import {ClockState} from "./ngrx/clock/clock.state";
import {updateClock} from "./ngrx/clock/clock.actions";
import {CalculatorComponent} from "./calculator/calculator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, DatePipe, CalculatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'redux';

  time$: Observable<Date>;
  running$: Observable<boolean>;
  private intervalId: any;

  count$ = this.store.select("counter","count");


  constructor(private store: Store<{ counter: CounterState, clock: ClockState }>) {
    this.time$ = store.select('clock', 'time');
    this.running$ = store.select('clock', 'running');

    this.intervalId = setInterval(() => {
      this.store.dispatch(updateClock({ time: new Date() }));
    }, 1000);  }

  startClock() {

  }



  public increase() {
    this.store.dispatch(CounterActions.increase());
  }

  public decrease() {
    this.store.dispatch(CounterActions.decrease());
  }

  updateCount(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      const value = parseInt(input.value, 10);
      if (!isNaN(value)) {
        this.store.dispatch({ type: '[Counter] Set', payload: value });
      }
    }
  }

  reset() {
    this.store.dispatch(reset());
  }

}
