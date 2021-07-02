export class Boat {
  longeur: number;
  largeur: number;
  tirant_eau: number;
  equipage: boolean;
  annexe: boolean;
  type: string;
  foil?: boolean;

  constructor(
    longeur: number,
    largeur: number,
    tirant_eau: number,
    equipage: boolean,
    annexe: boolean,
    type: string
  ) {
    this.longeur = longeur;
    this.largeur = largeur;
    this.tirant_eau = tirant_eau;
    this.equipage = equipage;
    this.annexe = annexe;
    this.type = type;
  }
}

export class CatamaranBoat extends Boat {
  constructor(
    longeur: number,
    largeur: number,
    tirant_eau: number,
    equipage: boolean,
    annexe: boolean
  ) {
    super(longeur, largeur, tirant_eau, equipage, annexe, 'Catamaran');
  }
}

export class VoilierBoat extends Boat {
  foil: boolean;

  constructor(
    longeur: number,
    largeur: number,
    tirant_eau: number,
    equipage: boolean,
    annexe: boolean,
    foil: boolean
  ) {
    super(longeur, largeur, tirant_eau, equipage, annexe, 'Voilier');
    this.foil = foil;
  }
}
