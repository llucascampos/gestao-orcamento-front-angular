import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css']
})
export class TabelaClientesComponent implements OnInit {

  @Input() clientes: Cliente[]
  displayedColumns: string[] = ['nome', 'email', 'telefone', 'documento', 'dataNascimento', 'sexo', 'opcao'];
  constructor() { }

  ngOnInit(): void {
  }

}
