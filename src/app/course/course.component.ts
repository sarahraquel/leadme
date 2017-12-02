import { DisciplinaService } from './../_services/disciplina.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [DisciplinaService],
})
export class CourseComponent implements OnInit {


  constructor(public DisciplinaService: DisciplinaService) {

   }

  box:any= '';
  disciplina;
  disciplina_nao_encontrada:boolean;

  public pieChartLabels:string[] = ['Aprovados', 'Reprovados'];
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  ngOnInit() {
  }

  search(a){
    this.disciplina = this.DisciplinaService.getDisciplina(a)
    let reprovados = Math.floor(Math.random() * (40 - 5 + 1)) + 5;
    let aprovados = 60 - reprovados;
    this.pieChartData = [reprovados, aprovados ]
    if(this.disciplina == null){
      this.disciplina_nao_encontrada = true
    }
    else{
      this.disciplina_nao_encontrada = false
    }

  }




}
