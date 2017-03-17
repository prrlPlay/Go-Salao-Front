import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaoComponent } from './salao.component';

const salaoRoutes: Routes = [
    { path: 'salao', component: SalaoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(salaoRoutes)],
    exports: []
})
export class SalaoRoutingModule { }