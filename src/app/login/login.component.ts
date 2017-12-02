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

  constructor(private auth: AuthService, private router: Router, 
    private route: ActivatedRoute) { }

  fazerLogin() {
    this.router.navigateByUrl("/profile");
  }

  ngOnInit() {
  }

}
