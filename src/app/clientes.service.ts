import { environment } from './../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURL+'/api/cliente';

  constructor(private http: HttpClient) { }

  salvar(cliente : Cliente) : Observable<Cliente> {
      return this.http.post<Cliente>(`${this.apiURL}`, cliente);
  }

  atualizar(cliente : Cliente) : Observable<any> {
    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
  }

  deletar(cliente: Cliente) : Observable<any>{
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }

  getClientes() : Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  getClienteById(id : number) : Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
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
