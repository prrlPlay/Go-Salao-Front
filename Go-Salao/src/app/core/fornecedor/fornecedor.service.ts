import { Injectable } from "@angular/core";

import { Endereco } from './../models/Endereco';
import { Fornecedor } from './../models/Fornecedor';
import { FornecedorLista } from './fornecedor-lista/fornecedor-lista';

@Injectable()
export class FornecedorService {

    private _fornecedores: Array<FornecedorLista>;

    constructor() {
        this._fornecedores = new Array<FornecedorLista>();
        this._fornecedores.push(new FornecedorLista(1, "Stefanini", "12.345.678/0001-90"));
        this._fornecedores.push(new FornecedorLista(2, "Easy Invest", "54.951.355/0001-15"));
        this._fornecedores.push(new FornecedorLista(3, "Parmalat", "48.186.1160001-48"));
        this._fornecedores.push(new FornecedorLista(4, "Hori Temperos", "14.156.456/0001-56"));
        this._fornecedores.push(new FornecedorLista(5, "Sr. Joaquim da Silva", "614.156.456-56"));
    }

    obterListaFornecedores() {
        return this._fornecedores;
    }

    obterFornecedor(id: number) {
        return new Fornecedor(5, "JK Latas e Acessórios", "123.156.195/0001-79", "forne@edor.com", "11 1234-5678", new Endereco("01001-000", "Praça da Sé", "S/N", "Sé", "São Paulo", "SP"));
    }
}