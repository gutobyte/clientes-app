import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {


  clientes: Cliente[] = [];
  clienteSelecionado : Cliente;
  menssagemSucesso?: string;
  menssagemErro?: string

  constructor(private service : ClientesService, private router: Router) {
    this.clienteSelecionado = new Cliente();
   }

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe( resposta => this.clientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/clientes/form'])
  }

  preparaDelecao(cliente : Cliente){

    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    console.log(this.clienteSelecionado)
    this.service
      .deletar(this.clienteSelecionado)
      .subscribe( 
        response => {
          this.menssagemSucesso = 'Cliente deletado com sucesso!!!'
          this.ngOnInit();
        },
        erro => this.menssagemErro = 'Ocorreu um erro ao deletar o cliente.')
  }

}
