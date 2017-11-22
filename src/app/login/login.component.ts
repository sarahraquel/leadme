import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  last_url: string = '/';
  formularioLogin: FormGroup

  constructor(private auth: AuthService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder) { }

  fazerLogin() {
    
    if(this.formularioLogin.valid){
      let data = {
        ...this.formularioLogin.value
      } 
      this.auth.autenticarUsuario(data)
                .subscribe((result) =>{
                  console.log(result)
                })
    }
  }

  ngOnInit() {
    this.formularioLogin = this.formBuilder.group({
      usuario: [null],
      password: [null]
  })
    // Busca a ultima rota para redirecionar após o Login
    this.route.fragment.subscribe((url) => {
      this.last_url = url ? url : '/';
    })

  }

}
