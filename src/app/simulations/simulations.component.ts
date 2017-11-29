import { Disciplina } from './../_models/disciplina.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulations',
  templateUrl: './simulations.component.html',
  styleUrls: ['./simulations.component.css']
})
export class SimulationsComponent implements OnInit {

  constructor() { 
    this.parentFn()
  }
  
  parentMessage = "from parente";
  lista = ['1']

  ngOnInit() {
  }

  adicionaDisciplina(disciplina){
    this.parentMessage = disciplina
    this.lista.push(disciplina)
  }

  receiveMessage($event) {
    this.adicionaDisciplina($event)
    console.log("Parente está recebendo" + $event.nome)
  }

  parentFn() {
    console.log('Parent triggering')
  }

}
