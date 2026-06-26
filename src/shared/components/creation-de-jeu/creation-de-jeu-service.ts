import { inject, Injectable } from '@angular/core';
import { LuDialogService } from '@lucca-front/ng/dialog';
import { CreationDeJeu } from './creation-de-jeu';

@Injectable({
  providedIn: 'root',
})
export class CreationDeJeuService {
  readonly dialogService = inject(LuDialogService);

  open() {
    const ref = this.dialogService.open({
      content: CreationDeJeu
    })
    return ref.result$;
  }
}
