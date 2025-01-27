import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { ResetPasswordComponent } from './reset-password/reset-password.component';
// import { DataListComponent } from './data-list/data-list.component';
import { AuthGuard } from './state/auth.guard'; // Update with the correct path

export const appRoutes: Routes = [ // Export as appRoutes
    { path: '', component: SignupComponent }, // Directly show signup page
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
//   { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'reset-password/:token', component: ResetPasswordComponent },
//   { path: 'data', component: DataListComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' },
];