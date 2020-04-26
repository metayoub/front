import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministrationComponent } from './administration.component';
import { AdministrationListComponent } from './list/list.component';
import { ListResolver } from './list/list.resolve';
const routes: Routes = [{
  path: '',
  component: AdministrationComponent,
  children: [
    {
      path: 'list',
      component: AdministrationListComponent,
      resolve : {
        users : ListResolver
      }
    },
    {
      path: 'update',
      /*component: ProfilComponent,*/
    },
    {
      path: 'add',
      // component: DashboardComponent,
    },
    {
      path: '',
      redirectTo: 'list',
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
export class AdministrationRoutingModule {
}
