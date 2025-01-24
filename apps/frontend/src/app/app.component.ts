import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from './state/auth.actions';
import { AuthState } from './state/auth.reducer';
import * as AuthSelectors from './state/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private store: Store<AuthState>) {
    this.isAuthenticated = this.store.select(AuthSelectors.selectIsAuthenticated);
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }
}