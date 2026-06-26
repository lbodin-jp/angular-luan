import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { AccueilService } from '../accueil/accueil-service';
import { Observable } from 'rxjs';
import { Jeu } from '../../shared/components/carte-jeu/jeu-model';
import { CarteJeu } from '../../shared/components/carte-jeu/carte-jeu';
import { CreationDeJeu } from "../../shared/components/creation-de-jeu/creation-de-jeu";

@Component({
  selector: 'app-favoris',
  imports: [AsyncPipe, PageHeaderComponent, CarteJeu],
  templateUrl: './favoris.html',
  styleUrl: './favoris.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Favoris {
  private readonly accueilService = inject(AccueilService);
  protected favorisJeux$: Observable<Jeu[]> = this.accueilService.getFavoriteGames();
}
