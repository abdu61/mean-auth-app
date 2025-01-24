import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  accessToken: string | null;
  error: any;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  accessToken: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.signup, (state) => ({ ...state, error: null })),
  on(AuthActions.signupSuccess, (state) => ({ ...state, isAuthenticated: true })),
  on(AuthActions.signupFailure, (state, { error }) => ({ ...state, error })),

  on(AuthActions.signin, (state) => ({ ...state, error: null })),
  on(AuthActions.signinSuccess, (state, { accessToken }) => ({
    ...state,
    isAuthenticated: true,
    accessToken,
  })),
  on(AuthActions.signinFailure, (state, { error }) => ({ ...state, error })),

  on(AuthActions.logout, (state) => ({ ...initialState }))
);