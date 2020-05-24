import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewClientesComponent } from './clientes/view-clientes/view-clientes.component';
import { TabelaClientesComponent } from './clientes/tabela-clientes/tabela-clientes.component';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ViewMateriaisComponent } from './materiais/view-materiais/view-materiais.component';
import { ViewMarceneirosComponent } from './marceneiros/view-marceneiros/view-marceneiros.component';
import { ViewOrcamentosComponent } from './orcamentos/view-orcamentos/view-orcamentos.component';
import { ViewServicosComponent } from './servicos/view-servicos/view-servicos.component';
import { ViewLoginComponent } from './login/view-login/view-login.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewClientesComponent,
    TabelaClientesComponent,
    CabecalhoComponent,
    ViewMateriaisComponent,
    ViewMarceneirosComponent,
    ViewOrcamentosComponent,
    ViewServicosComponent,
    ViewLoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule
  ],

  exports:[
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
