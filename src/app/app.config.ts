
import { provideHttpClient, withInterceptorsFromDi, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ContactHttpInterceptor } from './contact/http.interceptor';
import { LoadingHttpInterceptor } from './loading/http.interceptor';
import { EnvGoogleMapsAPIKey } from './env/maps.env';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ContactHttpInterceptor,
      multi: true
    },
    {
      provide: 'GOOGLE_MAPS_API_KEY',
      useValue: EnvGoogleMapsAPIKey.ApiKey,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingHttpInterceptor,
      multi: true
    }
  ]
};
