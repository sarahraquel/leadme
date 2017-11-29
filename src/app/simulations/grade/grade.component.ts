import { Disciplina } from './../../_models/disciplina.model';
import { DisciplinaService } from './../../_services/disciplina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css'], 
  providers: [DisciplinaService]
})
export class GradeComponent implements OnInit {

  listaDisciplinas: [any];

  constructor(public DisciplinaService: DisciplinaService) {
      this.listaDisciplinas = DisciplinaService.disciplinas;
   }

  ngOnInit() {
    console.log(this.listaDisciplinas)
  }

}
