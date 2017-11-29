import { Disciplina } from './../_models/disciplina.model';
import { Injectable } from '@angular/core';



@Injectable()
export class DisciplinaService {

    disciplinas: [Disciplina] = [
        new Disciplina("IMD00000", "FUNDAMENTOS MATEMÁTICOS DA COMPUTAÇÃO I", 90, "Obrigatória"),
        new Disciplina("IMD00000", "CÁLCULO DIFERENCIAL E INTEGRAL I", 90, "Obrigatória"),
        new Disciplina("IMD00000", "FUNDAMENTOS MATEMÁTICOS DA COMPUTAÇÃO II", 90, "Obrigatória"),
        new Disciplina("IMD00000", "FUNDAMENTOS MATEMÁTICOS DA COMPUTAÇÃO II", 90, "Optativa")
    ]

    getDisciplinas():Disciplina[]{
        return this.disciplinas;
    }
}