import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { dashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [{ path: '', component: dashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {}
