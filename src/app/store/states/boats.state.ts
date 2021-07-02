import { CatamaranBoat, VoilierBoat } from '../boats.model';

export interface BoatsState {
  boats: Array<CatamaranBoat | VoilierBoat>;
}

export const initialState: BoatsState = {
  boats: [],
};
