export class Salao {
    
    private nomeSalao: string;
    private nomeResponsavel: string;
    private email: string;
    private telefone: string;

    constructor(nomeSalao: string, nomeResponsavel: string, email: string, telefone: string) {
        this.nomeSalao = nomeSalao;
        this.nomeResponsavel = nomeResponsavel;
        this.email = email;
        this.telefone = telefone;
    }
}