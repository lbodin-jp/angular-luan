import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Carousel {
  readonly label = input.required<string>();
  readonly cardCount = input.required<number>();

  protected readonly cards = computed(() =>
    Array.from({ length: this.cardCount() }),
  );
}
