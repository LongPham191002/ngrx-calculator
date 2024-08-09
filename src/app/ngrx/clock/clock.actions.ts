import { createAction, props } from '@ngrx/store';

export const updateClock = createAction('[Clock] Update', props<{ time: Date }>());
