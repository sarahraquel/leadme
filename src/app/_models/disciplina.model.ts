export class Disciplina{

    public codigo: string;
    public nome: string = '';
    public ch: number;
    public tipo: string;

    constructor(codigo: string, nome: string, ch: number, tipo?: string) {
        this.codigo = codigo;
        this.nome = nome;
        this.ch = ch;
        this.tipo = tipo;
    } 
}