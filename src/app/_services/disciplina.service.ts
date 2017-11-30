import { Disciplina } from './../_models/disciplina.model';
import { Injectable } from '@angular/core';



@Injectable()
export class DisciplinaService {

    disciplinas: Disciplina [] = [
        new Disciplina("IMD0028", "Fundamentos Matemáticos da Computação I", 90, "Obrigatória"),
        new Disciplina("IMD00000", "Cálculo Diferencial e Integral I", 90, "Obrigatória"),
        new Disciplina("IMD00000", "Fundamentos Matemáticos da Computação II", 90, "Obrigatória"),
        new Disciplina("IMD00000", "Álgebra Linear", 60, "Optativa"),
        new Disciplina("DIM0504", "Análise e Projeto Orientado a Objeto", 60, "Optativa"),
        new Disciplina("IMD0043", "Redes de Computadores", 60, "Optativa"),
        new Disciplina("IMD00000", "Álgebra Linear", 60, "Optativa"),
        new Disciplina("IMD0034", "Vetores e Geometria Analítica", 60, "Optativa"),
    ]

    disciplinasSelecionadas: Disciplina[] = [

    ]

    getDisciplinas():Disciplina[]{
        return this.disciplinas;
    }

    addDisciplina(disciplina){

    }
}