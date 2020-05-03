import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministrationComponent } from './administration.component';
import { AdministrationListComponent } from './list/list.component';
import { AddUserComponent } from './add/add.component';
import { EditUserComponent } from './edit/edit.component';
import { ListUserResolver } from './list/list.resolve';
import { EditUserResolver } from './edit/edit.resolve';

const routes: Routes = [{
  path: '',
  component: AdministrationComponent,
  children: [
    {
      path: 'list',
      component: AdministrationListComponent,
      resolve : {
        users : ListUserResolver
      }
    },
    {
      path: 'edit/:id',
      component: EditUserComponent,
      resolve : {
        user : EditUserResolver
      }
    },
    {
      path: 'add',
      component: AddUserComponent,
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
    {
      path: '**',
      redirectTo: 'list',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {
}
