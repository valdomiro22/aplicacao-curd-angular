import { Injectable } from '@angular/core';
import { Curso } from './Curso';

@Injectable({
  providedIn: 'root'
})
export class CursosSerService {

  constructor() { }

  // Vetor que conterá os cursos
  private vetorDeCursos: Curso[] = [
    new Curso("JavaScript", 874, "Desenvolvimento"),
    new Curso("CSS", 400, "Desenvolvimento"),
    new Curso("Administração", 732, "Administração"),
  ];

  // Cadastrar
  public cadastrar(curso: Curso) {
    this.vetorDeCursos.push(curso);
  }

  // Listar
  public listar() {
    return this.vetorDeCursos;
  }

  // Atualizar
  public atualizar(id: number, curso: Curso) {
    this.vetorDeCursos[id] = curso;
  }

  // Deletar
  public deletar(id: number) {
    this.vetorDeCursos.splice(id, 1);
  }


}
