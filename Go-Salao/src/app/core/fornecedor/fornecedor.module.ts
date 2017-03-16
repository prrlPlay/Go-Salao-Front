import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FornecedorComponent } from './fornecedor.component';
import { FornecedorRoutingModule } from './fornecedor.routing.module';

@NgModule({
    imports: [
        CommonModule,
        FornecedorRoutingModule
    ],
    exports: [
        FornecedorComponent
    ],
    declarations: [
        FornecedorComponent
    ],
    providers: []
})
export class FornecedorModule { }