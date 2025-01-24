import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

// Signup Actions
export const signup = createAction('[Auth] Signup', props<{ user: User }>());
export const signupSuccess = createAction('[Auth] Signup Success');
export const signupFailure = createAction('[Auth] Signup Failure', props<{ error: any }>());

// Signin Actions
export const signin = createAction('[Auth] Signin', props<{ user: User }>());
export const signinSuccess = createAction('[Auth] Signin Success', props<{ accessToken: string }>());
export const signinFailure = createAction('[Auth] Signin Failure', props<{ error: any }>());

// Logout Action
export const logout = createAction('[Auth] Logout');