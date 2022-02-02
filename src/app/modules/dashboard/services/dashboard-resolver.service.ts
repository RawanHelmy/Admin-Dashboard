import { Actions, ofType } from '@ngrx/effects';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { GetAllAd, SET_ALL_AD } from '../store/ads.actions';
import { finalize, take } from 'rxjs/operators';

import { Ad } from '../models/ads.model';
import { Injectable } from '@angular/core';
import { LoadingService } from '../../shared/services/loading.service';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class DashboardResolverService implements Resolve<Ad[]> {
  constructor(
    private store: Store<{ AdList: { ads: Ad[] } }>,
    private actions$: Actions,
    private loadingService: LoadingService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loadingService.loadingOn();
    this.store.dispatch(new GetAllAd());
    return this.actions$.pipe(
      ofType(SET_ALL_AD),
      take(1),
      finalize(() => this.loadingService.loadingOff())
    );
  }
}
