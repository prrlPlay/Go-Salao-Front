import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HeaderComponent } from './header/header.component';
import { CtaComponent } from './cta/cta.component';

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
        CtaComponent
    ],
    declarations: [
        HomeComponent,
        MenuComponent,
        RodapeComponent,
        HeaderComponent,
        CtaComponent
    ]
})
export class LayoutModule { }