
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LayoutModule } from './layout/layout.module';
import { MeAjudaModule } from './me-ajuda/me-ajuda.module';
import { EstoqueModule } from './core/estoque/estoque.module';
import { FornecedorModule } from './core/fornecedor/fornecedor.module';
import { SalaoModule } from './core/salao/salao.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    LayoutModule,
    MeAjudaModule,
    EstoqueModule,
    FornecedorModule,
    SalaoModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }