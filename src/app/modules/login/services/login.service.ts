import { Login, Logout } from '../store/login.action';
import { catchError, finalize, of, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '../../shared/services/loading.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private router: Router,
    private store: Store<{ Login: { token: any } }>
  ) {}
  login(user: User) {
    this.loadingService.loadingOn();
    return this.http
      .post<any>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDO1zT3S909tR-JcL6DvTvg0-wDi4DbkyE',
        { ...user, returnSecureToken: true }
      )
      .pipe(
        catchError(() => of({ error: true })),
        tap((res) => {
          this.store.dispatch(new Login(res.idToken));
          localStorage.setItem('token', res.idToken);
          this.router.navigateByUrl('/dashboard');
        }),
        finalize(() => {
          this.loadingService.loadingOff();
        })
      );
  }
  logout() {
    this.store.dispatch(new Logout());
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
