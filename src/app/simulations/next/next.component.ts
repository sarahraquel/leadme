import { GradeComponent } from './../grade/grade.component';
import { DisciplinaService } from './../../_services/disciplina.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css'],
  providers:[DisciplinaService]
})
export class NextComponent implements OnInit {

    listaDisciplinas: any[];
    disciplinasAdicionadas: any [];

    @Output() messageEvent = new EventEmitter<string>();

  constructor(public DisciplinaService: DisciplinaService) {
      this.listaDisciplinas = DisciplinaService.disciplinas;
      this.disciplinasAdicionadas = [];
   }

  ngOnInit() {
    console.log(this.listaDisciplinas.length)
  }

  sendMessage(disciplina) {
    this.messageEvent.emit(disciplina)
  }

  clicked(event) {
    this.disciplinasAdicionadas.push(event);
    this.sendMessage(event)
  }

}
