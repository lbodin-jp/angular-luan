import { Genre } from "../../../pages/accueil/accueil";

export type Jeu = {
    id: number,
    titre: string,
    plateforme: string,
    note: number,
    termine: boolean,
    favoris: boolean,
    derniere_recherche: string,
    genre: Genre,
    img: string,
  }