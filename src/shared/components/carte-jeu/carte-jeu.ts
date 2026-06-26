import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { Jeu } from './jeu-model';
import { AccueilService } from '../../../pages/accueil/accueil-service';

@Component({
  selector: 'app-carte-jeu',
  imports: [],
  templateUrl: './carte-jeu.html',
  styleUrl: './carte-jeu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarteJeu {
  jeu = input.required<Jeu>();
  private readonly accueilService = inject(AccueilService);

  protected toggleFavori(): void {
    const jeuValue = this.jeu();
    const nouveauFavori = !jeuValue.favoris;
    jeuValue.favoris = nouveauFavori;

    this.accueilService.updateFavorite(jeuValue.id, nouveauFavori).subscribe();
  }
}
