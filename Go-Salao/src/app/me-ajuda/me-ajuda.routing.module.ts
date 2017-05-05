import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeAjudaComponent } from './me-ajuda.component';
import { ContatoComponent } from './contato/contato.component';

const meAjudaRoutes: Routes = [
    { path: 'meajuda', component: MeAjudaComponent },
    { path: 'contato', component: ContatoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(meAjudaRoutes)],
    exports: [RouterModule]
})
export class MeAjudaRoutingModule { }