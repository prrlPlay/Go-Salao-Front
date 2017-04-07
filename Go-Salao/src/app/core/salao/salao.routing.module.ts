import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalaoComponent } from './salao.component';
import { SalaoFormComponent } from './salao-form/salao-form.component';

const salaoRoutes: Routes = [
    { path: 'salao', component: SalaoComponent },
    { path: 'salao/novo', component: SalaoFormComponent }
];

@NgModule({
    imports: [RouterModule.forChild(salaoRoutes)],
    exports: []
})
export class SalaoRoutingModule { }