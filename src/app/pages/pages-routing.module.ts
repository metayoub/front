import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ProfilResolver } from './profil/profil.resolve';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'administation',
      loadChildren: () => import('./administration/administration.module')
        .then(m => m.AdministrationModule),
    },
    {
      path: 'profil',
      component: ProfilComponent,
      resolve : {
        user : ProfilResolver
      }
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    /*{
      path: '**',
      component: NotFoundComponent,
    },*/
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
