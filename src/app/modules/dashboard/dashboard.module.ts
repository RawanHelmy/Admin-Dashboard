import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [dashboardComponent],
  imports: [SharedModule, dashboardRoutingModule],
})
export class dashboardModule {}
