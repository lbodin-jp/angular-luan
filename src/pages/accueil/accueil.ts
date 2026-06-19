import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderComponent } from "@lucca-front/ng/page-header";

@Component({
  selector: 'app-accueil',
  imports: [PageHeaderComponent],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Accueil {}
