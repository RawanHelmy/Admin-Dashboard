import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../serivces/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class dashboardComponent implements OnInit {
  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getAll().subscribe((res) => console.log(res));
  }
}
