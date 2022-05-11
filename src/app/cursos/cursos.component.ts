import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosSerService } from './cursos-ser.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  // Atributos
  public vetorDeCursosEspelho!: Curso[];  // Para receber o conteudo do vetor que esta em serviços
  public curso!: Curso;  // Uma variavel do tipo curso para poder instanciar um curso abaixo
  public id!: number;  // Vai servir para criar um id global em editar


  constructor(private servico: CursosSerService) { }

  ngOnInit(): void {
    this.id = -1;  // Para ser usado na hora de trocar o botão cadastrar para editar
    this.curso = new Curso("", 0, " ");  // Tem que instanciar um objeto prara receber o conteudo dos impus
    this.vetorDeCursosEspelho = this.servico.listar();  // Recebe a lista dos cursos que estão la no vetor de seriço
  }

  // Função cadastrar
  cadastrar() {
    this.servico.cadastrar(this.curso);  // Recebe o curso inserido nos imputs
    this.curso = new Curso("", 0, "");  // Para poder limpar os campos e criar um novo curso na hora de cadastrar
  }

  // Função excluir
  excluir(id: number) {
    this.vetorDeCursosEspelho.splice(id, 1);  // Exclui um o indice que foi passado, no vetor
    this.id = -1;  // Volta o id para -1 para que o botão de edição volte a ser cadastrar
  }

  // Editar
  editar(id: number) {

    this.id = id;

    this.curso = new Curso(
      // Isso fará com que as informações do curso que eu quero editar apareção nos campos dos imputs
      // Para que eu apague e coloque as que eu quero no lugar
      this.vetorDeCursosEspelho[id].nomeCurso, 
      this.vetorDeCursosEspelho[id].precoCurso, 
      this.vetorDeCursosEspelho[id].areaCurso
      );
  }

  atualizar() {
    this.servico.atualizar(this.id, this.curso);  // Isso tambem faz com que as informações apareção, nos campos
    this.curso = new Curso("", 0, "");
    this.id = -1;
  }

}
