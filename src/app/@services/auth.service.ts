import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

import { User } from '../@auth/model/user';

@Injectable()
export class AuthService {
    constructor (private http: HttpClient){}

    public get currentUserValue(): User {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    userByName(name : string) {
        return this.http.get('/authentification/api/user/userByName/'+name)
    }

    login(email: string, password: string){
        return this.http.post('/authentification/api/auth/signin', {email, password})
        .pipe(map(user=> {
            // Store user
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }))
    }

    logout(){
        localStorage.removeItem('currentUser');
    }

    getTokenExpirationDate(token: string): number {
        const decoded = jwt_decode(token);
        if (decoded.exp === undefined) return null;
        return decoded.exp;
      }
      
    isTokenExpired(token?: string): boolean {
        if(!token) return true;
        const exp = this.getTokenExpirationDate(token)*1000;
        if(exp === undefined) return false;
        return !(exp > new Date().getTime());
    }
}