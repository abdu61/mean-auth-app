import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../model/user.model';
import { AuthState } from '../state/auth.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from '../state/auth.actions';

@Component({
  selector: 'app-signup',
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  user: User = { email: '', password: '' };

  constructor(private store: Store<AuthState>) {}

  onSubmit() {
    this.store.dispatch(AuthActions.signup({ user: this.user }));
  }
}
