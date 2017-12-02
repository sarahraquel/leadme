import { Disciplina } from './../../_models/disciplina.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgIf, NgClass,  NgStyle } from '@angular/common';
@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  listaDisciplinas: any [];

  private _childText: string;

  @Input() 
  set childText(value) {
    if (this.listaDisciplinas.indexOf(value) != -1){
      console.log("ja existe")
    }
    else{
      this.listaDisciplinas.push(value)
      this.getDiagnostico(value.ch)
    }
  }


  constructor() {
      this.listaDisciplinas = [];
   }

  ngOnInit() {
    this.listaDisciplinas.pop()
    this.totalHoras = 0
  }

  remove(disciplina) {
    this.listaDisciplinas = this.listaDisciplinas.filter(obj => obj !== disciplina);
    this.totalHoras -= disciplina.ch
    this.calculaPorcentagem()
  }

  diagnosticoTexto: string = "";
  diagnosticoPorcentagem: number = 0;
  totalHoras;
  getDiagnostico(value){
    this.totalHoras = this.totalHoras + value;
    this.calculaPorcentagem()
    console.log(this.percentageStyle)
    console.log(this.totalHoras)
    if(this.totalHoras < 200){
      this.diagnosticoTexto = "abaixo"
      this.diagnosticoPorcentagem = 30
      this.label_class = "label label-warning"
      this.barClass = "progress-bar progress-bar-warning"

    }
    else if(this.totalHoras > 200 && this.totalHoras <= 330){
      this.diagnosticoTexto = "próximo"
      this.label_class = "label label-success"
      this.barClass = "progress-bar progress-bar-success"
    }
    else{
      this.diagnosticoTexto = "acima"
      this.label_class = "label label-danger"
      this.barClass = "progress-bar progress-bar-danger"
    }
  }

  calculaPorcentagem(){
    this.percentage = Math.trunc(this.totalHoras*100/420) > 100? 100 : Math.trunc(this.totalHoras*100/420);
    this.percentageStyle = {"width" : this.percentage+ "%"}
  }
    label_class:string = "label";
    barClass:string;
    percentage:number;
    ch_maxima = 420;
    percentageStyle;
}
