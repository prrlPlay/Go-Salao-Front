import { Component, OnInit } from '@angular/core';

import { FornecedorService } from './../fornecedor.service';
import { FornecedorLista } from './fornecedor-lista';

@Component({
  selector: 'fornecedor-lista',
  templateUrl: './fornecedor-lista.component.html',
  styleUrls: ['./fornecedor-lista.component.css']
})
export class FornecedorListaComponent implements OnInit {

  private _fornecedores: Array<FornecedorLista>;

  constructor(service: FornecedorService) {
    this._fornecedores = service.obterListaFornecedores();
  }

  ngOnInit() { }

  remover(id: number) {
    alert("Remover fornecedor " + id);
  }
}