import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// ეს ფუნქცია ქმნის TranslateHttpLoader-ს, რომელიც იყენებს HttpClient-ს 
// JSON ფაილების ჩასატვირთად './assets/i18n/' დირექტორიიდან.
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

// ეს ფუნქცია უზრუნველყოფს თარგმნის მოდულის კონფიგურაციას
// ის განსაზღვრავს ძირითად ენას ('ka') და იყენებს HttpLoaderFactory-ს
// თარგმნის ფაილების ჩატვირთვისთვის.
export const provideTranslation = () => ({
  defaultLanguage: 'ka', // ძირითადი ენა - ქართული
  loader: {
    provide: TranslateLoader, // გამოიყენება თარგმნის ფაილების ჩასატვირთად
    useFactory: HttpLoaderFactory, // ჩატვირთვის ფუნქციის მიწოდება
    deps: [HttpClient], // HttpClient არის დეფენდენსი, რომელიც საჭიროა თარგმნის ჩატვირთვისთვის
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),

    // TranslateModule-ის პროვაიდერის იმპორტი თარგმანისთვის
    importProvidersFrom([
      HttpClient, 
      TranslateModule.forRoot(provideTranslation())
    ]),
  ]
};