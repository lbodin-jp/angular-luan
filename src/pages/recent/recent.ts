import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';
import { AccueilService } from '../accueil/accueil-service';
import { Observable } from 'rxjs';
import { Jeu } from '../../shared/components/carte-jeu/jeu-model';
import { CarteJeu } from '../../shared/components/carte-jeu/carte-jeu';

@Component({
  selector: 'app-recent',
  imports: [AsyncPipe, PageHeaderComponent, CarteJeu],
  templateUrl: './recent.html',
  styleUrl: './recent.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Recent {
  private readonly accueilService = inject(AccueilService);
  protected recentJeux$: Observable<Jeu[]> = this.accueilService.getRecentGames();
}
