import { RouterModule, Routes } from '@angular/router';

import { DashboardResolverService } from './services/dashboard-resolver.service';
import { NgModule } from '@angular/core';
import { dashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: dashboardComponent,
    resolve: [DashboardResolverService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {}
