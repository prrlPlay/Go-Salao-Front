import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorService } from './fornecedor.service';
import { FornecedorRoutingModule } from './fornecedor.routing.module';
import { FornecedorComponent } from './fornecedor.component';
import { FornecedorDetalheComponent } from './fornecedor-detalhe/fornecedor-detalhe.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorListaComponent } from './fornecedor-lista/fornecedor-lista.component';

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