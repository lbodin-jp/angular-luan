import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderComponent } from '@lucca-front/ng/page-header';

@Component({
  selector: 'app-header',
  imports: [PageHeaderComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}

