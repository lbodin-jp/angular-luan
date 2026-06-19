import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "../shared/components/header/header";
import { Footer } from '../shared/components/footer/footer';
import { LuccaSitemapComponent } from "@lucca/ngx-sitemap";
import { AppLayoutComponent } from '@lucca-front/ng/app-layout';
import { LuSkipLinksComponent } from '@lucca-front/ng/a11y';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, LuccaSitemapComponent, AppLayoutComponent,LuSkipLinksComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('projet-luan');
}
