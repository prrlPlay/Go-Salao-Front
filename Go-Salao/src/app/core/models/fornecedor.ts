import { Endereco } from './Endereco';

export class Fornecedor {

    private id: number;
    private nome: string;
    private documento: string;
    private email: string;
    private telefone: string;
    private endereco: Endereco;    

    constructor(id: number, nome: string, documento: string, email: string, telefone: string, endereco: Endereco) {
        this.id = id;
        this.nome = nome;
        this.documento = documento;
        this.email = email;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    obterID() {
        return this.id;
    }
}