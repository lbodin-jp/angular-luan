import { registerLocaleData } from '@angular/common';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import localeIt from '@angular/common/locales/it';
import localeNl from '@angular/common/locales/nl';
import localePt from '@angular/common/locales/pt';
import {
  ApplicationConfig,
  DEFAULT_CURRENCY_CODE,
  importProvidersFrom,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withInMemoryScrolling,
  withRouterConfig,
} from '@angular/router';

import { provideCoreSelectCurrentUserId } from '@lucca-front/ng/core-select/user';
import { configureLuDialog, provideLuDialog } from '@lucca-front/ng/dialog';
import { LuToastsModule } from '@lucca-front/ng/toast';
import {
  provideLuUserPopover,
  USER_POPOVER_IS_ACTIVATED,
} from '@lucca-front/ng/user-popover';

import { of } from 'rxjs';

import { routes } from './app.routes';

// Locales loaded by the Lucca Front components (dates, numbers, currencies).
[localeDe, localeEn, localeEs, localeFr, localeIt, localeNl, localePt].forEach(
  (locale) => registerLocaleData(locale),
);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({ anchorScrolling: 'enabled' }),
      // Lets Angular call history.go(1) instead of replaceState on cancelled navigations.
      withRouterConfig({ canceledNavigationResolution: 'computed' }),
    ),
    importProvidersFrom(LuToastsModule),

    // i18n / currency — adjust the defaults to your app's needs.
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },

    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),

    // Lucca Front
    configureLuDialog(),
    provideLuDialog(),
    provideLuUserPopover(),
    { provide: USER_POPOVER_IS_ACTIVATED, useValue: of(true) },
    // TODO: wire to your real authenticated user id (e.g. a principal service).
    provideCoreSelectCurrentUserId(() => 0),
  ],
};
