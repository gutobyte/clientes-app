import { LayoutComponent } from './../layout/layout.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';
import { ServicoPrestadoComponent } from './servico-prestado/servico-prestado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'servico-prestado', component: LayoutComponent, children: [

    {path: 'form', component: ServicoPrestadoComponent},
    {path: 'lista', component: ServicoPrestadoListaComponent},
    {path: '', redirectTo: '/servico-prestado/lista', pathMatch: 'full'}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicoPrestadoRoutingModule { }
