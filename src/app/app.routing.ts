import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './guards/auth.guard';
import { MockAuthGuard } from "./guards/mock-auth.gaurd";
import { MockLoginComponent } from "./login/mock-login.component";

const appRoutes: Routes = [
    { path: 'mockLogin', component: MockLoginComponent },
    { path: 'login', component: LoginComponent, canActivate: [MockAuthGuard] },
    { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const RoutingModule = RouterModule.forRoot(appRoutes,{useHash: true});