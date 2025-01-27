import { bootstrapApplication } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouter } from '@angular/router';
import { isDevMode } from '@angular/core';
import { authReducer } from './app/state/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appRoutes } from './app/app.routes';
import { AuthEffects } from './app/state/auth.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideStore({ auth: authReducer }),
    provideEffects(AuthEffects),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
    }),
  ],
}).catch((err) => console.error(err));