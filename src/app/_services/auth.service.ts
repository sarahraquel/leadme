import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    private autheticated: boolean = false;

    constructor(private http : Http) { 
        this.autheticated = false;
    }

    autenticarUsuario(data) {
        this.autheticated = true;
    }

    get isAuthenticated(){
        return this.autheticated;
    }

    isauth(){
        return this.autheticated;
    }
}