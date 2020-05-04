import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AdministrationService } from '../../../@services/administration.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ListRoleResolver implements Resolve<any> {
  constructor(private administrationService: AdministrationService) {}

  resolve(): Observable<any>|Promise<any>|any {
    return this.administrationService.roleList()
  }
}