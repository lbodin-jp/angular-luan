import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderComponent } from "@lucca-front/ng/page-header";

@Component({
  selector: 'app-recent',
  imports: [PageHeaderComponent],
  templateUrl: './recent.html',
  styleUrl: './recent.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Recent {}
