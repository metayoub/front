import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AdministrationService {
    constructor (private http: HttpClient){ }

    userList() {
        return this.http.get('/authentification/api/user/all')
    }

    userCreate(user: Object) {
        return this.http.post('/authentification/api/user/all', user)
    }

}