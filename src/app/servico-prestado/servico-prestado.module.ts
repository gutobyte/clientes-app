import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServicoPrestadoRoutingModule } from './servico-prestado-routing.module';
import { ServicoPrestadoComponent } from './servico-prestado/servico-prestado.component';
import { ServicoPrestadoListaComponent } from './servico-prestado-lista/servico-prestado-lista.component';


@NgModule({
  declarations: [
    ServicoPrestadoComponent,
    ServicoPrestadoListaComponent
  ],
  imports: [
    CommonModule,
    ServicoPrestadoRoutingModule,
    FormsModule,
    RouterModule
    
  ], exports : [
      ServicoPrestadoComponent,
      ServicoPrestadoListaComponent
  ]
})
export class ServicoPrestadoModule { }
