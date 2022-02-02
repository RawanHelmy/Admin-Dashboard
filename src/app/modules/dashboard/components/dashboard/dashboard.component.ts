import { Component, OnInit } from '@angular/core';

import { Ad } from '../../models/ads.model';
import { AdPopupComponent } from '../ad-popup/ad-popup.component';
import { DashboardService } from '../../services/dashboard.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class dashboardComponent implements OnInit {
  adsList: any;

  constructor(public dashboardService: DashboardService) {}
  ngOnInit(): void {
    this.adsList = this.dashboardService.getAll();
  }
}
