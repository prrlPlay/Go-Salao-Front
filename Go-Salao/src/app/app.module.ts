import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { MeAjudaComponent } from './shared/pages/me-ajuda/me-ajuda.component';
import { LayoutModule } from './layout/layout.module';
import { FornecedorModule } from './core/fornecedor/fornecedor.module';
import { SalaoModule } from './core/salao/salao.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotfoundComponent,
    MeAjudaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    LayoutModule,
    FornecedorModule,
    SalaoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }