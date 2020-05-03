import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdministrationService } from '../../../@services/administration.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EditUserResolver implements Resolve<any> {
  constructor(private administrationService: AdministrationService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.administrationService.user(route.params.id)
  }
}