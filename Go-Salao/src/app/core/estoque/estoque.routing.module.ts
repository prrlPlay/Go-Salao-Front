import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstoqueComponent } from './estoque.component';
import { CompraComponent } from './compra/compra.component';
import { SaidaComponent } from './saida/saida.component';
import { LancamentoPerdasComponent } from './lancamento-perdas/lancamento-perdas.component';

const EstoqueRoutes: Routes = [
    { path: 'estoque', component: EstoqueComponent },
    { path: 'compra', component: CompraComponent },
    { path: 'saida', component: SaidaComponent },
    { path: 'perdas', component: LancamentoPerdasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(EstoqueRoutes)],
    exports: [RouterModule]
})
export class EstoqueRoutingModule { }