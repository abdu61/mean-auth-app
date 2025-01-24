import { Component } from '@angular/core';
//import { AuthService } from '../service/auth.service';
import { User } from '../model/user.model';
//import { Router } from '@angular/router';
import { AuthState } from '../state/auth.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from '../state/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  user: User = { email: '', password: '' };

  constructor(private store: Store<AuthState>) {}

  onSubmit() {
    this.store.dispatch(AuthActions.signin({ user: this.user }));
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
}