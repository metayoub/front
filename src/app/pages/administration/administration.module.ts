import { NgModule } from '@angular/core';
import {
  NbCardModule,
} from '@nebular/theme';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule } from '@angular/forms';

import { AdministrationComponent } from './administration.component';
import { AdministrationListComponent } from './list/list.component';
import { AdministrationRoutingModule } from './administration-routing.module';
@NgModule({
  imports: [
    AdministrationRoutingModule,
    FormsModule,
    ThemeModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AdministrationComponent,
    AdministrationListComponent,
  ],
})
export class AdministrationModule {}