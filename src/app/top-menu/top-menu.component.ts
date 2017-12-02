import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  
  loginOuLogout:string 
  constructor(public auth:AuthService) { }

  ngOnInit() {
    this.loginOuLogout   = this.auth.isauth ? "Logout" : "Login";
  }




}
