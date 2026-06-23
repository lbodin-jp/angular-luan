import { ChangeDetectionStrategy, Component } from '@angular/core';
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

@Component({
  selector: 'app-accueil',
  imports: [
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
export class Accueil {
  protected search = '';
  protected selectedLabel: string | null = null;
  protected readonly labels = ['Open World', 'Platformer', 'RPG'];

  protected readonly rows = [
    { label: 'Open World', cardCount: 5 },
    { label: 'Platformer', cardCount: 5 },
    { label: 'RPG', cardCount: 5 },
  ];
}
