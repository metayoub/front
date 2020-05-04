import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';

import { AdministrationComponent } from './administration.component';
import { AdministrationListComponent } from './list/list.component';
import { AdministrationRoleComponent } from './role/role.component';
import { AddUserComponent } from './add/add.component';
import { EditUserComponent } from './edit/edit.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    AdministrationRoutingModule,
    FormsModule,
    ThemeModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AdministrationComponent,
    AdministrationListComponent,
    AdministrationRoleComponent,
    AddUserComponent,
    EditUserComponent,
  ],
})
export class AdministrationModule {}