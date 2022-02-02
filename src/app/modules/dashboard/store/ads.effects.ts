import { Actions, Effect, ofType } from '@ngrx/effects';
import { GET_ALL_AD, SetAllAd } from './ads.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

import { Ad } from '../models/ads.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';

@Injectable()
export class AdsEffects {
  @Effect()
  getAllAds = this.actions$.pipe(
    ofType(GET_ALL_AD),
    catchError(() => of([])),
    switchMap(() => {
      return this.http.get<Ad[]>(environment.backendUrl);
    }),
    map((res) => {
      return new SetAllAd(res);
    })
  );

  constructor(private actions$: Actions, private http: HttpClient) {}
}
