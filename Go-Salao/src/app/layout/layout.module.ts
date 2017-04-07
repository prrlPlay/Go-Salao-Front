import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { HeaderComponent } from './header/header.component';
import { ContatoComponent } from './contato/contato.component';
import { CtaComponent } from './cta/cta.component';
import { StepByStepComponent } from './step-by-step/step-by-step.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    exports: [
        HomeComponent,
        MenuComponent,
        RodapeComponent,
        HeaderComponent,
        ContatoComponent,
        CtaComponent
    ],
    declarations: [
        HomeComponent,
        MenuComponent,
        RodapeComponent,
        HeaderComponent,
        ContatoComponent,
        CtaComponent,
        StepByStepComponent
    ]
})
export class LayoutModule { }