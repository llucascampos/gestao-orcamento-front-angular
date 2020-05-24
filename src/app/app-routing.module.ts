import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewClientesComponent } from '../app/clientes/view-clientes/view-clientes.component'
import { ViewMarceneirosComponent } from '../app/marceneiros/view-marceneiros/view-marceneiros.component'
import { ViewMateriaisComponent } from '../app/materiais/view-materiais/view-materiais.component'
import { ViewOrcamentosComponent } from '../app/orcamentos/view-orcamentos/view-orcamentos.component'
import { ViewServicosComponent } from '../app/servicos/view-servicos/view-servicos.component'
import { ViewLoginComponent } from '../app/login/view-login/view-login.component'

const routes: Routes = [
  { path:"clientes", component: ViewClientesComponent },
  { path:"marceneiros", component: ViewMarceneirosComponent },
  { path:"materiais", component: ViewMateriaisComponent },
  { path:"orcamentos", component: ViewOrcamentosComponent },
  { path:"servicos", component: ViewServicosComponent },
  { path:"login", component: ViewLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
