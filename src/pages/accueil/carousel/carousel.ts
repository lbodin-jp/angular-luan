import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Genre, Jeu } from '../accueil';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousel {
  readonly label = input.required<string>();
  readonly jeux = input.required<Jeu[]>(); 

 
}
