 import { Routes, RouterModule } from '@angular/router';
 import { ContainerComponent } from './container/container.component';
import { MyqueueComponent } from './myqueue/myqueue.component';
import { ReleaseboardComponent } from './releaseboard/releaseboard.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './login/AuthGuard';
import { AppDashboard } from './app.dashboard';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './landing/landing.component';
const appRoutes: Routes = [
        { path: 'myqueue', component: MyqueueComponent },
        { path: 'releasemanagement', component: ReleaseboardComponent},
         { path: '', component: LoginComponent },
        { path: 'appDashBoard', component: AppDashboard, canActivate: [AuthGuard] },
      { path: 'adminDashBoard', component: AppComponent, canActivate: [AuthGuard] },
        {path : '**', redirectTo: ''}
    ];

export const routing = RouterModule.forRoot(appRoutes);
