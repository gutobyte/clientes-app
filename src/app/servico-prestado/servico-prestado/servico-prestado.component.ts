import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../servicoPrestado';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado',
  templateUrl: './servico-prestado.component.html',
  styleUrls: ['./servico-prestado.component.css']
})
export class ServicoPrestadoComponent implements OnInit {

  clientes? : Cliente[]
  servico : ServicoPrestado;
  success : boolean =false;
  errors? : String[] | null;

  constructor( private clienteService : ClientesService, private serviceServicoPrestado : ServicoPrestadoService) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe( response => this.clientes = response);
  }

  onSubmit(){
    this.serviceServicoPrestado
        .salvar(this.servico)
        .subscribe( response => {
          console.log( response);
          this.success=true;
          this.errors = null;
          this.servico = new ServicoPrestado();   
        }, errorResponse => {
          this.success=false;
          this.errors = errorResponse.error.errors;
        }
        )
  }

}
