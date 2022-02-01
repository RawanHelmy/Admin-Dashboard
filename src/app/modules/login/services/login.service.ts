import { catchError, finalize, of, tap } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from '../../shared/services/loading.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService,
    private router: Router
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
          if (res?.idToken) localStorage.setItem('token', res.idToken);
          this.router.navigateByUrl('/dashboard');
        }),
        finalize(() => {
          this.loadingService.loadingOff();
        })
      );
  }
  checkIfLogged() {
    return localStorage.getItem('token') ? true : false;
  }
  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
