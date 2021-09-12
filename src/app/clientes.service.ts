import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  salvar(cliente : Cliente) : Observable<Cliente> {
      return this.http.post<Cliente>('http://localhost:8080/api/cliente', cliente);
  }

  atualizar(cliente : Cliente) : Observable<any> {
    return this.http.put<Cliente>(`http://localhost:8080/api/cliente/${cliente.id}`, cliente);
  }

  deletar(cliente: Cliente) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/cliente/${cliente.id}`);
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/api/cliente');
  }

  getClienteById(id : number) : Observable<Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/cliente/${id}`);
  }
  
  
  /*
  getClientes() : Cliente[]{
    let cliente = new Cliente();
    cliente.id=1;
    cliente.nome='Fulano';
    cliente.dataCadastro='18/04/2021'
    cliente.cpf='01217555170'
    
    return [cliente]
  }
  */
}
