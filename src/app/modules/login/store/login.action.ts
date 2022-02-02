import { Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTOLOGIN = 'AUTOLOGIN';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: string) {}
}
export class AutoLogin implements Action {
  readonly type = AUTOLOGIN;
}
export class Logout implements Action {
  readonly type = LOGOUT;
}

export type AuthActions = Login | Logout | AutoLogin;
