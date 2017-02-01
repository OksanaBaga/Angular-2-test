import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main.component';
import { AddAccountComponent } from './addAccount.component';
import { EditAccountComponent } from './editAccount.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'add', component: AddAccountComponent },
    { path: 'edit', component: EditAccountComponent }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });