import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorComponent } from './fornecedor.component';
import { FornecedorRoutingModule } from './fornecedor.routing.module';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';
import { FornecedorService } from './fornecedor.service';

@NgModule({
    imports: [
        CommonModule,
        FornecedorRoutingModule
    ],
    exports: [
        FornecedorComponent
    ],
    declarations: [
        FornecedorComponent,
        FornecedorDetalheComponent,
        FornecedorFormComponent,
        FornecedorListaComponent
    ],
    providers: [
        FornecedorService
    ]
})
export class FornecedorModule { }