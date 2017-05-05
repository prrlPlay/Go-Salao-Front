import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstoqueComponent } from './estoque.component';
import { CompraComponent } from './compra/compra.component';
import { SaidaComponent } from './saida/saida.component';
import { LancamentoPerdasComponent } from './lancamento-perdas/lancamento-perdas.component';
import { EstoqueRoutingModule } from './estoque.routing.module';
import { InventarioComponent } from './inventario/inventario.component';

@NgModule({
  imports: [
    CommonModule,
    EstoqueRoutingModule
  ],
  declarations: [
    EstoqueComponent,
    CompraComponent,
    SaidaComponent,
    LancamentoPerdasComponent,
    InventarioComponent
  ]
})
export class EstoqueModule { }
