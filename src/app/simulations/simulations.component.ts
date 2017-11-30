import { Disciplina } from './../_models/disciplina.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.css']
})
export class SimulationsComponent implements OnInit {

  constructor() { 
  }
  
  parentMessage = "from parente";

  ngOnInit() {
  }

  adicionaDisciplina(disciplina){
    this.parentMessage = disciplina
  }

  receiveMessage($event) {
    this.adicionaDisciplina($event)
  }



}
