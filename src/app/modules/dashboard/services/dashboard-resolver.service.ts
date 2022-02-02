import { Actions, ofType } from '@ngrx/effects';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { GetAllAd, SET_ALL_AD } from '../store/ads.actions';

import { Ad } from '../models/ads.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DashboardResolverService implements Resolve<Ad[]> {
  constructor(
    private store: Store<{ AdList: { ads: Ad[] } }>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new GetAllAd());
    return this.actions$.pipe(ofType(SET_ALL_AD), take(1));
  }
}
