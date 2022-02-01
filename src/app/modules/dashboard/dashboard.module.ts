import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardRoutingModule } from './dashboard-routing.module';
import { AdPopupComponent } from './components/ad-popup/ad-popup.component';

@NgModule({
  declarations: [dashboardComponent, AdPopupComponent],
  imports: [SharedModule, dashboardRoutingModule],
})
export class dashboardModule {}
