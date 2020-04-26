import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../../@services/auth.service';

@Injectable({providedIn: "root"})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ){}
    
    canActivate(route : ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // Il faut bien vérifier le token 
        const currentUser = this.authService.currentUserValue;
        if(currentUser && currentUser.token) {
            return true;
        }
        this.router.navigate(['/auth'], {
            queryParams : {
                returnUrl: state.url
            }
        });
        return false;
    }
}