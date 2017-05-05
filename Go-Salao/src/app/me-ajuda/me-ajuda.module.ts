import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeAjudaRoutingModule } from './me-ajuda.routing.module';
import { MeAjudaComponent } from './me-ajuda.component';
import { MenuAjudaComponent } from './menu-ajuda/menu-ajuda.component';
import { ContatoComponent } from './contato/contato.component';

@NgModule({
    imports: [
        CommonModule,
        MeAjudaRoutingModule
    ],
    declarations: [
        MeAjudaComponent,
        MenuAjudaComponent,
        ContatoComponent
    ],
    exports: [
        MeAjudaComponent,
        ContatoComponent
    ]
})
export class MeAjudaModule { }