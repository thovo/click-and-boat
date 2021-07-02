import { createAction, props } from '@ngrx/store';
import { Boat } from '../boats.model';

export const getAllBoats = createAction('[BOATS] Get all boats');
export const addBoat = createAction(
  '[BOATS] Add boat',
  props<{ boat: Boat }>()
);
