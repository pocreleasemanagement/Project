 import { Routes, RouterModule } from '@angular/router';
 import { ContainerComponent } from './container/container.component';
import { MyqueueComponent } from './myqueue/myqueue.component';
import { ReleaseboardComponent } from './releaseboard/releaseboard.component';

const appRoutes: Routes = [
        { path: 'myqueue', component: MyqueueComponent },
        { path: 'releasemanagement', component: ReleaseboardComponent},
        {path : '**', redirectTo: ''}
    ];

export const routing = RouterModule.forRoot(appRoutes);
