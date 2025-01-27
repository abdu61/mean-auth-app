import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AuthActions from './state/auth.actions';
import { AuthState } from './state/auth.reducer';
import * as AuthSelectors from './state/auth.selectors';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li *ngIf="!isAuthenticated"><a routerLink="/signup">Sign Up</a></li>
        <li *ngIf="!isAuthenticated"><a routerLink="/signin">Sign In</a></li>
        <li *ngIf="isAuthenticated"><button (click)="onLogout()">Logout</button></li>
        <li *ngIf="isAuthenticated"><a routerLink="/data">Data</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
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