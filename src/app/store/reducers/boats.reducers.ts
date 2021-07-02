import { Action, createReducer, on } from '@ngrx/store';
import { addBoat, getAllBoats } from '../actions/boats.actions';
import { Boat } from '../boats.model';
import { BoatsState, initialState } from '../states/boats.state';

const boatsReducers = createReducer(
  initialState,
  on(getAllBoats, (state) => ({ ...state })),
  on(addBoat, (state, { boat }) => {
    let boats: Boat[] = JSON.parse(JSON.stringify(state.boats));
    if (!boats) {
      boats = [];
    }
    boats.push(boat);
    return { ...state, boats };
  })
);

export function reducer(
  state: BoatsState | undefined,
  action: Action
): BoatsState {
  return boatsReducers(state, action);
}
