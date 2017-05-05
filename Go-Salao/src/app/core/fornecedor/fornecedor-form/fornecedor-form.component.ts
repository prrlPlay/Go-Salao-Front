import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { Fornecedor } from './../../models/Fornecedor';
import { FornecedorService } from './../fornecedor.service';

@Component({
  selector: 'fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.css']
})
export class FornecedorFormComponent implements OnInit {

  private id: number;
  private inscricao: Subscription;
  private fornecedor: Fornecedor;

  constructor(private route: ActivatedRoute, private service: FornecedorService) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];

        if (this.id != null)
        {
          console.log("Fornecedor com ID: " + this.id);
          // this.fornecedor = this.service.obterFornecedor(this.id);
        }
        else {
          console.log("Novo fornecedor!");
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}