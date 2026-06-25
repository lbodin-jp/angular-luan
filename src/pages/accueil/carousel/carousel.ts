import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Jeu } from '../../../shared/components/carte-jeu/jeu-model';
import { CarteJeu } from "../../../shared/components/carte-jeu/carte-jeu";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CarteJeu],
})
export class Carousel {
  readonly label = input.required<string>();
  readonly jeux = input.required<Jeu[]>(); 

 
}
