import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddAccountComponent } from './addAccount.component';
import { MainComponent } from './main.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'add', component: AddAccountComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });