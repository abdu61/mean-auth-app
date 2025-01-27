import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { User } from '../model/user.model';
import * as AuthActions from '../state/auth.actions';
import { AuthState } from '../state/auth.reducer';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule to imports
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = { email: '', password: '' };

  constructor(private store: Store<AuthState>) {}

  onSubmit() {
    this.store.dispatch(AuthActions.signup({ user: this.user }));
  }
}