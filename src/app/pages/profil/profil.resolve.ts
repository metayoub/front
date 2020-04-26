import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../@services/auth.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfilResolver implements Resolve<any> {
  constructor(private authService: AuthService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.authService.userByName(this.authService.currentUserValue.username);
  }
}