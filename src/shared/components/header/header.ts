import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonComponent } from '@lucca-front/ng/button';
import { IconComponent } from '@lucca-front/ng/icon';

@Component({
  selector: 'app-header',
  imports: [ButtonComponent, IconComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {}
