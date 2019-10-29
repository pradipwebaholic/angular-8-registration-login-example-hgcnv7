import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './login';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', canActivate: [AuthGuard] , loadChildren: './views/home/home.module#HomeModule' },
    { path: 'login', component: LoginComponent },
    { path: 'home', canActivate: [AuthGuard], loadChildren: './views/home/home.module#HomeModule' },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);