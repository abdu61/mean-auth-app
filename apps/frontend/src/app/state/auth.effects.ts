import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../service/auth.service';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signup),
      switchMap(({ user }) =>
        this.authService.register(user).pipe(
          map(() => AuthActions.signupSuccess()),
          catchError((error) => of(AuthActions.signupFailure({ error })))
        )
      )
    )
  );

  signin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signin),
      switchMap(({ user }) =>
        this.authService.login(user).pipe(
          map((data) => AuthActions.signinSuccess({ accessToken: data.access_token })),
          catchError((error) => of(AuthActions.signinFailure({ error })))
        )
      )
    )
  );

  signinSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.signinSuccess),
        tap(({ accessToken }) => {
          localStorage.setItem('access_token', accessToken);
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('access_token');
          this.router.navigate(['/signin']);
        })
      ),
    { dispatch: false }
  );
}
export const authEffects = [AuthEffects];