import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loading$: BehaviorSubject<Boolean>;

  constructor() {
    this.loading$ = new BehaviorSubject(new Boolean(false));
  }
  loadingOn() {
    return this.loading$.next(true);
  }
  loadingOff() {
    return this.loading$.next(false);
  }
  isLoading() {
    return this.loading$;
  }
}
