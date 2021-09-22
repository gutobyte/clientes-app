
import { Usuario } from './usuario';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username? : string;
  password? : string;
  cadastrando? : boolean;
  mensagemSucesso? : string | null;
  errors?: String[];

  constructor(  private router : Router, private authService : AuthService) { }

  onSubmit(){
    this.router.navigate(['/home']);
  }

  preparaCadastrar(event:any){

    event.preventDefault();
    this.cadastrando = true;
  }

  cancelarCadastrar(){
    this.cadastrando = false;
  }

  cadastrar(){
    const usuario : Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvar(usuario)
    .subscribe( response => {
      this.mensagemSucesso = "Cadastro realizado com sucesso!!! Efetue o Login"
      this.cadastrando = false;
      this.username = '';
      this.password = '';
      this.errors = []
    }, errorResponse => {
      this.mensagemSucesso = null;
      this.errors = errorResponse.error.errors;
      
    })
  }
  

}
