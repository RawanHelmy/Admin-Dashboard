import { catchError, finalize, map, of } from 'rxjs';

import { Ads } from '../models/ads.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '../../shared/services/loading.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}
  getAll() {
    this.loadingService.loadingOn();
    return this.http.get<Ads[]>(environment.backendUrl).pipe(
      catchError(() => of([])),
      map((res: Ads[]) => {
        let data = {
          tableData: res,
          dataKeys: [''],
        };
        data.dataKeys = data.tableData
          ? [...Object.keys(data.tableData[0] ? data.tableData[0] : {})]
          : [];
        let columns = ['select'];
        columns.push(...data.dataKeys);
        data.dataKeys = columns;
        data.dataKeys.push('action');
        return data;
      }),
      finalize(() => this.loadingService.loadingOff())
    );
  }
  sortFunction() {
    return (item: any, property: any) => {
      if (typeof item[property] == 'string')
        return item[property].toLowerCase();
      return item[property];
    };
  }
}
