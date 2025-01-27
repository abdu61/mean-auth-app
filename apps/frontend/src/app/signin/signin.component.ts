import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { User } from '../model/user.model';
import * as AuthActions from '../state/auth.actions';
import { AuthState } from '../state/auth.reducer';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, CommonModule], // Add FormsModule and CommonModule to imports
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  user: User = { email: '', password: '' };

  constructor(private store: Store<AuthState>) {}

  onSubmit() {
    this.store.dispatch(AuthActions.signin({ user: this.user }));
  }
}
  // user: User = { email: '', password: '' };

  // constructor(private authService: AuthService, private router: Router) {}

  // onSubmit() {
  //   this.authService.login(this.user).subscribe({
  //     next: (data) => {
  //       localStorage.setItem('access_token', data.access_token);
  //       this.router.navigate(['/']);
  //     },
  //     error: (error) => {
  //       console.error(error);
  //     },
  //   });
  // }
