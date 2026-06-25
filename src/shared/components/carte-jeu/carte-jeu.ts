import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Jeu } from './jeu-model';

@Component({
  selector: 'app-carte-jeu',
  imports: [],
  templateUrl: './carte-jeu.html',
  styleUrl: './carte-jeu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarteJeu {
  jeu = input.required<Jeu>();
}
