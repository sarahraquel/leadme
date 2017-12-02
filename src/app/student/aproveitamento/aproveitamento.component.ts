import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aproveitamento',
  templateUrl: './aproveitamento.component.html',
  styleUrls: ['./aproveitamento.component.css']
})
export class AproveitamentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public lineChartLabels:Array<any> = ['1º', '2º', '3º', '4º', '5º', '6º', '7º'];
  public lineChartType:string = 'line';
  public lineChartLegend: string = 't';


public lineChartData:Array<any> = [
    {data: [330, 260, 300, 290, 300, 290, 300], label: 'Aprovado'},
    {data: [360, 260, 300, 290, 300, 360, 300], label: 'Cursado'},
  ];

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
