import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  usuarioLogado? : string;

  constructor( private autheService : AuthService, private router : Router) { }

  ngOnInit(): void {

    this.usuarioLogado = this.autheService.getUsuarioAutenticado();
  }

  logout(){
    this.autheService.encerrarSessao();
    this.router.navigate(['/login'])

  }

}
