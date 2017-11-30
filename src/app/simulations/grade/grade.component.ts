import { Disciplina } from './../../_models/disciplina.model';
import { Component, OnInit, Input } from '@angular/core';
import { NgIf } from '@angular/common';
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
    }
  }


  constructor() {
      this.listaDisciplinas = [];
   }

  ngOnInit() {
    this.listaDisciplinas.pop()
  }

  remove(disciplina) {
    this.listaDisciplinas = this.listaDisciplinas.filter(obj => obj !== disciplina);
  }


}
