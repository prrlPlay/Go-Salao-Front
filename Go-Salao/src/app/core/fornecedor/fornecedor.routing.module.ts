import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedorComponent } from './fornecedor.component';

const fornecedorRoutes: Routes = [
    { path: 'fornecedor', component: FornecedorComponent }
];

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports: []
})
export class FornecedorRoutingModule { }