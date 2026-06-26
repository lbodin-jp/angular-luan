import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';
import { IconComponent } from '@lucca-front/ng/icon';
import { CreationDeJeuService } from '../creation-de-jeu/creation-de-jeu-service';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, IconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {

  readonly dialogCreationJeu = inject(CreationDeJeuService);

  ouvreCreationJeu() {
    this.dialogCreationJeu.open();
  }
}
