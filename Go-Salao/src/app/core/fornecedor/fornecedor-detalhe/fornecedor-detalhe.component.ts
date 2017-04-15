import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Fornecedor } from './../../models/Fornecedor';
import { FornecedorService } from './../fornecedor.service';

@Component({
  selector: 'fornecedor-detalhe',
  templateUrl: './fornecedor-detalhe.component.html',
  styleUrls: ['./fornecedor-detalhe.component.css']
})
export class FornecedorDetalheComponent implements OnInit {

  private inscricao: Subscription;
  private fornecedor: Fornecedor;

  constructor(private route: ActivatedRoute, private service: FornecedorService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.fornecedor = this.service.obterFornecedor(params['id']);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}