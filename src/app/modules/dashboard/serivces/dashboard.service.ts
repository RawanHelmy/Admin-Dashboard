import { Ads } from '../models/ads.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<Ads[]>(environment.backendUrl);
  }
}
