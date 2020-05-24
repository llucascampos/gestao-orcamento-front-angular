import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from '../cliente-services/cliente.service'
import { Cliente } from '../models/cliente.model';
import { TabelaClientesComponent } from '../tabela-clientes/tabela-clientes.component'
@Component({
  selector: 'app-view-clientes',
  templateUrl: './view-clientes.component.html',
  styleUrls: ['./view-clientes.component.css']
})
export class ViewClientesComponent implements OnInit {

 // @ViewChild(TabelaClientesComponent, {static: false})  
  listaClientes: Cliente[] = [];

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.todosclientes()
  }

  todosclientes(): void {
    this.clienteService.todosClientes().subscribe(res => {
      this.listaClientes = res;
    })
    
  }

}
