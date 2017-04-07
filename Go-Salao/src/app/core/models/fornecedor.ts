import { Endereco } from './Endereco';

export class Fornecedor {

    private nome: string;
    private documento: string;
    private email: string;
    private telefone: string;
    private endereco: Endereco;    

    constructor(nome: string, documento: string, email: string, telefone: string, endereco: Endereco) {
        this.nome = nome;
        this.documento = documento;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }
}