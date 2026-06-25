import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  FilterBarComponent,
  FilterPillComponent,
  FilterPillAddonBeforeDirective,
  FilterPillAddonAfterDirective,
} from '@lucca-front/ng/filter-pills';
import { LuSimpleSelectInputComponent } from '@lucca-front/ng/simple-select';
import { FormFieldComponent } from '@lucca-front/ng/form-field';
import { TextInputComponent } from '@lucca-front/ng/forms';
import { Carousel } from './carousel/carousel';
import { AccueilService } from './accueil-service';
import { map, Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Jeu } from '../../shared/components/carte-jeu/jeu-model';

export const GENRE = ['Open World', 'Platformer', 'RPG', 'action-aventure', "Jeux de puzzle"];
export type Genre = keyof typeof GENRE;


  export type JeuxParGenre = {
    genre: string,
    jeux: Jeu[],
  }

@Component({
  selector: 'app-accueil',
  imports: [
    AsyncPipe,
    FormsModule,
    FilterBarComponent,
    FilterPillComponent,
    FilterPillAddonBeforeDirective,
    FilterPillAddonAfterDirective,
    LuSimpleSelectInputComponent,
    FormFieldComponent,
    TextInputComponent,
    Carousel,
  ],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accueil implements OnInit {
  protected search = '';
  protected selectedLabel: string | null = null;
  protected readonly genres = GENRE;
  private readonly accueilService = inject(AccueilService);
  protected jeux$: Observable<Jeu[]> | null = null;
  protected jeuxParGenre$: Observable<JeuxParGenre[]> | null = null;
  

  protected readonly rows = [
    { label: 'Open World', cardCount: 5 },
    { label: 'Platformer', cardCount: 5 },
    { label: 'RPG', cardCount: 5 },
  ];

  ngOnInit() {
    this.jeux$ = this.accueilService.getAllGames();
    this.jeuxParGenre$ = this.jeux$.pipe(
      map((jeux) => {
        const jeuxParGenre: JeuxParGenre[] = [];
        for (const genre of this.genres) {
          jeuxParGenre.push({
            genre: genre,
            jeux: jeux.filter((jeu) => jeu.genre === genre.toLowerCase()),
          });
        }
        return jeuxParGenre;
      })
    )
    console.log(this.jeux$);
  }
}


