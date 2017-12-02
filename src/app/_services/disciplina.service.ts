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
        new Disciplina("IMD0039", this.capitalize("ESTRUTURAS DE DADOS BÁSICAS") + " II" ,60, "Obrigatória" ),
        new Disciplina("IMD0029", this.capitalize("ESTRUTURAS DE DADOS BÁSICAS") + " I" ,60, "Obrigatória" ),
        new Disciplina("IMD0041", this.capitalize("INTRODUÇÃO A ORGANIZAÇÃO E ARQUITETURA DE COMPUTADORES"), 60, "Optativa"),
        new Disciplina("IMD0036", this.capitalize("	SISTEMAS OPERACIONAIS"), 60, "Optativa"),
        new Disciplina("IMD0040", this.capitalize("LINGUAGEM DE PROGRAMAÇÃO")  + " II", 60, "Obrigatória"), 
        new Disciplina("IMD0030", this.capitalize("LINGUAGEM DE PROGRAMAÇÃO") + " I", 60, "Obrigatória"),
        new Disciplina("IMD0017", this.capitalize("PRÁTICAS DE LEITURA E ESCRITA EM PORTUGUÊS") + " I", 30, "Obrigatória" ),
        new Disciplina("IMD0027", this.capitalize("PRÁTICAS DE LEITURA E ESCRITA EM PORTUGUÊS") + " II", 30, "Obrigatória")
    ]

    disciplinasSelecionadas: Disciplina[] = [

    ]

    capitalize(s){
        return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
    }

    getDisciplinas():Disciplina[]{
        return this.disciplinas;
    }

    addDisciplina(disciplina){

    }

    getDisciplina(nomeOuCodigo):Disciplina{
        if(nomeOuCodigo== ""){
            return null;
        }
        for(let d of this.disciplinas){
            if(d.nome.toLowerCase().indexOf(nomeOuCodigo.toLowerCase()) !== -1){
                return d;
            }
            else if(d.codigo.indexOf(nomeOuCodigo.toUpperCase()) !== -1){
                return d;
            }
        }

        return null;
    }
}