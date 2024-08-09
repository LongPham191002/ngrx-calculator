import {CounterState} from "./counter.state";
import {createReducer, on} from "@ngrx/store";

import * as CountActions from './counter.actions';

export const counterReducer = createReducer(<CounterState>{
    count: 0
  },
  on(CountActions.increase, (state)=>{
    return {
      count: state.count + 1
    }
  }),

  on(CountActions.decrease, (state)=>{
    return {
      count: state.count - 1
    }
  }),

  on(CountActions.setCount, (state,{payload})=>{
    return {
      count: payload
    }
  }),

  on(CountActions.reset, (state) => ({
    count: 0
  }))
);
