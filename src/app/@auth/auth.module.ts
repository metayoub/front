import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ErrorInterceptor } from './core/auth.error';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';

import { NgxLoginComponent } from './login/login.component';
import { NgxRPComponent } from './requestPassword/requestPassword.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule,
  ],
  declarations: [
    // ... here goes our new components
    NgxLoginComponent,
    NgxRPComponent,
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
})
export class NgxAuthModule {}