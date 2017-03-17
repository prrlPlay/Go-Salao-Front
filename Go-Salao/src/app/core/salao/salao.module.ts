import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaoComponent } from './salao.component';
import { SalaoFormComponent } from './salao-form/salao-form.component';
import { SalaoRoutingModule } from './salao.routing.module';

@NgModule({
    declarations: [
        SalaoComponent,
        SalaoFormComponent
    ],
    imports: [
        CommonModule,
        SalaoRoutingModule
    ],
    exports: [
        SalaoComponent,
        SalaoFormComponent
    ],
    providers: [
        
    ],
})
export class SalaoModule { }