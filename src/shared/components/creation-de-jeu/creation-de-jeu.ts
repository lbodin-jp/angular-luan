import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { platformBrowser } from '@angular/platform-browser';
import { DialogComponent, DialogContentComponent, DialogFooterComponent, DialogHeaderComponent, LuDialogRef, provideLuDialog } from '@lucca-front/ng/dialog';
import { FormFieldComponent } from "@lucca-front/ng/form-field";
import { NumberFormatInputComponent, NumberInputComponent, TextInputComponent } from '@lucca-front/ng/forms';
import { GENRE, Genre } from '../../../pages/accueil/accueil';
import { LuSimpleSelectInputComponent } from '@lucca-front/ng/simple-select';
import { ButtonComponent } from '@lucca-front/ng/button';
import { FormComponent } from '@lucca-front/ng/form';
import { AccueilService } from '../../../pages/accueil/accueil-service';
import { Jeu } from '../carte-jeu/jeu-model';
import { map } from 'rxjs';
import { AsyncPipe } from '@angular/common';

type UiState = "default" | "success" | "error" | "loading"; 

@Component({
  selector: 'app-creation-de-jeu',
  imports: [
    AsyncPipe,
    ButtonComponent,
    DialogComponent, 
    DialogHeaderComponent, 
    DialogContentComponent, 
    DialogFooterComponent, 
    FormComponent,
    FormFieldComponent,
    TextInputComponent,
    ReactiveFormsModule,
    NumberFormatInputComponent,
    LuSimpleSelectInputComponent,
  ],
  providers: [provideLuDialog()],
  templateUrl: './creation-de-jeu.html',
  styleUrl: './creation-de-jeu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreationDeJeu {
  readonly dialogRef = inject(LuDialogRef);
  readonly genres = GENRE;
  readonly uiState$: UiState = "default";
  jeuService = inject(AccueilService);
  
  formCreation = new FormGroup({
    titre: new FormControl<string | null>(null, Validators.required),
    plateforme: new FormControl<string | null>(null, Validators.required),
    note: new FormControl<number | null>(null, [Validators.required,Validators.min(0), Validators.max(20)]),
    genre: new FormControl<Genre | null>(null, Validators.required),
    image: new FormControl<string | null>(null, Validators.required),
  });

  CreeJeu() {
    const formValue = this.formCreation.getRawValue();

    const payload: Partial<Jeu> = {
      titre: formValue.titre!,
      plateforme: formValue.plateforme!,
      note: formValue.note!,
      genre: formValue.genre!,
      img: formValue.image!,
      termine: false
    } 

    console.log("PAYLOAD : ", payload)
    this.jeuService.createJeu(payload).pipe(
      map(() => {
        this.formCreation.reset();
      })
    ).subscribe();
     
  }
}
