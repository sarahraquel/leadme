import { Disciplina } from './../../_models/disciplina.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {

  listaDisciplinas: any [];
  a;
  
  @Input()
  fn() {
    this.a = "uuu"
    console.log('triggered from the parent')
  }

  constructor() {
      this.listaDisciplinas = [];
   }

  ngOnInit() {

  }

  clicked(event) {
    console.log("Removendo" + event)
  }


}
