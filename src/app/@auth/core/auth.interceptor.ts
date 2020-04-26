import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../@services/auth.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor (private authService: AuthService){}

    // interceptor TO Add token to the request
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.authService.currentUserValue){
            request = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${this.authService.currentUserValue.token}`
                }
            });
        }
        return next.handle(request);
    }
}