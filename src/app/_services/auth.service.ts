import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
    private autheticated: boolean = false;

    constructor(private http : Http) { }

    autenticarUsuario(data) {

        return this.http.post("http://apitestes.info.ufrn.br/authz-server/oauth/token?client_id=integra-ti-id&client_secret=segredo&grant_type=client_credentials", data)
        .map(res => res.json(),
             err => err)
    }

    get isAuthenticated(){
        return this.autheticated;
    }
}