import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { AdPopupComponent } from '../ad-popup/ad-popup.component';
import { Ads } from '../../models/ads.model';
import { DashboardService } from '../../serivces/dashboard.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class dashboardComponent implements OnInit, AfterViewInit {
  selection = new SelectionModel<any>(true, []);
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  dataKeys: string[] = [];
  tableData: Ads[] = [];
  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator, { static: false }) set matPaginator(
    mp: MatPaginator
  ) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }
  constructor(
    private dashboardService: DashboardService,
    public Dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.dashboardService.getAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res.tableData);
      this.dataKeys = res.dataKeys;
    });
  }
  ngAfterViewInit(): void {
    this.setDataSourceAttributes();
  }
  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = this.dashboardService.sortFunction();
    this.dataSource.sort = this.sort;
  }
  deleteAd(event: Event, row: Ads) {
    event.stopPropagation();
    this.dataSource.data = this.dataSource.data.filter((r: any) => {
      return r != row;
    });
  }
  addAd() {
    this.Dialog.open(AdPopupComponent)
      .afterClosed()
      .subscribe((ad) => {
        this.dataSource.data.push(ad);
      });
  }
  viewAd(event: Event, row: Ads) {
    event.stopPropagation();
    this.Dialog.open(AdPopupComponent, {
      data: { ...row },
    })
      .afterClosed()
      .subscribe((res) => {
        let index = this.dataSource.data.findIndex((ad) => ad == row);
        this.dataSource.data[index] = res;
        this.dataSource = new MatTableDataSource(this.dataSource.data);
      });
  }
  checkboxLabel(row?: any): string {
    return !row
      ? `${this.isAllSelected() ? 'select' : 'deselect'} all`
      : `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
          row.id + 1
        }`;
  }
  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
}
