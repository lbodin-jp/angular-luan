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
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';

export const GENRE = ['Open World', 'Platformer', 'RPG', 'action-aventure'];
export type Genre = keyof typeof GENRE;

export type Jeu = {
    id: number,
    titre: string,
    plateforme: string,
    note: number,
    termine: boolean,
    favoris: boolean,
    derniere_recherche: string,
    genre: Genre,
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
  protected readonly labels = ['Open World', 'Platformer', 'RPG'];
  private readonly accueilService = inject(AccueilService);
  protected jeux$: Observable<Jeu[]> | null = null;
  private test?: Genre;

  protected readonly rows = [
    { label: 'Open World', cardCount: 5 },
    { label: 'Platformer', cardCount: 5 },
    { label: 'RPG', cardCount: 5 },
  ];

  ngOnInit() {
    this.jeux$ = this.accueilService.getAllGames();
    console.log(this.jeux$);
  }
}
