import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FornecedorComponent } from './fornecedor.component';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';

const fornecedorRoutes: Routes = [
    { path: 'fornecedor', component: FornecedorComponent, children: [
        {path: 'novo', component: FornecedorFormComponent },
        {path: ':id', component: FornecedorDetalheComponent },
        {path: ':id/editar', component: FornecedorFormComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(fornecedorRoutes)],
    exports: [RouterModule]
})
export class FornecedorRoutingModule { }