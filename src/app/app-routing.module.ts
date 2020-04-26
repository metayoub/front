import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from './@auth/core/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
      canActivate:[AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './@auth/auth.module#NgxAuthModule',
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home/**' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
