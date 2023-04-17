import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServivoComponent } from './servivo/servivo.component';
import { ServivoLstComponent } from './servivo-lst/servivo-lst.component';
import { PesquisadorComponent } from './pesquisador/pesquisador.component';
import { PesquisadorLstComponent } from './pesquisador-lst/pesquisador-lst.component';

const routes: Routes = [
  {path:"servivo", component:ServivoComponent},
  {path:"servivo/novo", component:ServivoLstComponent},
  {path:"servivo/editar/:id", component:ServivoLstComponent},
  {path:"pesquisadores", component:PesquisadorLstComponent},
  {path:"pesquisador/novo", component:PesquisadorComponent},
  {path:"pesquisador/edit/:id", component:PesquisadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
