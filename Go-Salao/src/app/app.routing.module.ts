import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './shared/login/login.component';
import { MeAjudaComponent } from './shared/pages/me-ajuda/me-ajuda.component';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';

const appRoute: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'meajuda', component: MeAjudaComponent },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})
export class AppRoutingModule { }