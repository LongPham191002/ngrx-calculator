import { createReducer, on } from '@ngrx/store';
import { ClockState, initialClockState } from './clock.state';
import * as ClockActions from './clock.actions';

export const clockReducer = createReducer(
  initialClockState,
  on(ClockActions.updateClock, (state, { time }) => ({
    ...state,
    time
  }))
);
