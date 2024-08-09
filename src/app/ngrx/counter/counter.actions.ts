import {createAction, props} from "@ngrx/store";

export const increase = createAction("[Counter] Increase");

export const decrease = createAction("[Counter] Decrease");

export const setCount = createAction("[Counter] Set", props<{ payload: number }>());
export const reset = createAction("[Counter] Reset");
