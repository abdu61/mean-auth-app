import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../state/auth.reducer';
import * as AuthSelectors from '../state/auth.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isAuthenticated: Observable<boolean>;

  constructor(private store: Store<AuthState>) {
    this.isAuthenticated = this.store.select(AuthSelectors.selectIsAuthenticated);
  }
}