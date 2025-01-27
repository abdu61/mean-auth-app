import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../model/user.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = { email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.user).subscribe({
      next: () => {
        this.router.navigate(['/signin']);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}