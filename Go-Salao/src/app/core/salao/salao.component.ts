import { Component, OnInit } from '@angular/core';

import { Salao } from './models/salao';

@Component({
  selector: 'salao',
  templateUrl: './salao.component.html',
  styleUrls: ['./salao.component.css']
})
export class SalaoComponent implements OnInit {

  private salao: Salao;

  constructor() {
    this.salao = new Salao();
    this.salao.nomeEstabelecimento = "Bellu's";
    this.salao.nomeResponsavel = "Maria Elza";
    this.salao.email = "elza@maria.com";
    this.salao.celular = "Bellu's";
  }

  ngOnInit() {
  }

}
