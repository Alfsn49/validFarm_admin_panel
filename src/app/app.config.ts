import { ApplicationConfig,importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { apiHandlerInterceptor } from './core/interceptor/api-handler.interceptor';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideHttpClient(withInterceptors([
      apiHandlerInterceptor
    ])),
    provideAnimations(),
    provideToastr(),
    provideClientHydration(),
    importProvidersFrom(BrowserAnimationsModule), provideAnimationsAsync(),
  ]
};
