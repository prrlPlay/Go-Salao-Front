import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared.routing.module';
import { FormErrorComponent } from './form-error/form-error.component';
import { BotaoRemoverComponent } from './botao-remover/botao-remover.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
    imports: [
        CommonModule,
        SharedRoutingModule
    ],
    declarations: [
        FormErrorComponent,
        BotaoRemoverComponent,
        NotfoundComponent
    ],
    exports: [
        FormErrorComponent,
        BotaoRemoverComponent,
        NotfoundComponent
    ]
})
export class SharedModule { }