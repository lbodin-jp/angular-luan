import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderComponent } from "@lucca-front/ng/page-header";

@Component({
  selector: 'app-favoris',
  imports: [PageHeaderComponent],
  templateUrl: './favoris.html',
  styleUrl: './favoris.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Favoris {}
