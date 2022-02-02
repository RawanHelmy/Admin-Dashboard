import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject$ = new BehaviorSubject<boolean>(false);
  loading$: Observable<boolean> = this.loadingSubject$;

  constructor() {}
  loadingOn() {
    return this.loadingSubject$.next(true);
  }
  loadingOff() {
    return this.loadingSubject$.next(false);
  }
  isLoading() {
    return this.loading$;
  }
}
