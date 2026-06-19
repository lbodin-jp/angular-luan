import { Injectable } from '@angular/core';
import {
  ISitemapNode,
  SitemapDeferredValue,
  SitemapNodeProvider,
  SitemapNodeType,
} from '@lucca/ngx-sitemap';

/**
 * Application sitemap nodes provider.
 *
 * Quick local menu with 3 entries. Replaces the internal
 * `TrainingSitemapNodeProvider` from the example.
 */
@Injectable({ providedIn: 'root' })
export class AppSitemapNodeProvider extends SitemapNodeProvider {
  override getNodes(): SitemapDeferredValue<ISitemapNode[]> {
    return [
      { key: 'home', title: 'Accueil', url: '/', type: SitemapNodeType.Regular },
      { key: 'recent', title: 'Récent', url: '/recent', type: SitemapNodeType.Regular },
      { key: 'favorites', title: 'Favoris', url: '/favoris', type: SitemapNodeType.Regular },
    ];
  }
}
