export class Endereco {
    
    private cep: string;
    private logradouro: string;
    private numero: string;
    private bairro: string;
    private cidade: string;
    private estado: string;
    
    constructor(cep: string, logradouro: string, numero: string, bairro: string, cidade: string, estado: string){
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
}