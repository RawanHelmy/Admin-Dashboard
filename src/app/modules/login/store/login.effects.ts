import { AUTOLOGIN, Login } from './login.action';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginEffects {
  @Effect()
  autoLogin = this.actions$.pipe(
    ofType(AUTOLOGIN),
    map(() => {
      let token = localStorage.getItem('token');
      if (token) {
        return new Login(token);
      }
      return { type: 'DUMMY' };
    })
  );
  constructor(private actions$: Actions) {}
}
