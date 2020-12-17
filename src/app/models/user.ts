export class User {
  private _id: number;
  private _nom: string;
  private _prenom: string;

  constructor(id: number, nom: string, prenom: string) {
    this._id = id;
    this._nom = nom;
    this._prenom = prenom;
  }
}

