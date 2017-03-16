import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LayoutRoutingModule } from './layout.routing.module';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule
    ],
    exports: [
        HomeComponent,
        MenuComponent,
        RodapeComponent
    ],
    declarations: [
        HomeComponent,
        MenuComponent,
        RodapeComponent
    ]
})
export class LayoutModule { }