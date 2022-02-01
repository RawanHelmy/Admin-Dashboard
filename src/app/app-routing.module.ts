import { RouterModule, Routes } from '@angular/router';

import { AuthGaurdService } from './modules/shared/guards/auth-gaurd.service';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGaurdService],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.dashboardModule
      ),
  },
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
