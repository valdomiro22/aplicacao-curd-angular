export class Curso {

    nomeCurso!: string;
    precoCurso!: number;
    areaCurso!: string;

    constructor(nome: string, preco: number, are: string) {
        this.nomeCurso = nome;
        this.precoCurso = preco;
        this.areaCurso = are;
    }
}