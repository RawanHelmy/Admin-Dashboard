import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { dashboardComponent } from './components/dashboard/dashboard.component';
import { dashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [dashboardComponent],
  imports: [CommonModule, dashboardRoutingModule],
})
export class dashboardModule {}
