import { Action } from '@ngrx/store';
import { Ad } from '../models/ads.model';

export const ADD_AD = 'ADD_AD';
export const EDIT_AD = 'EDIT_AD';
export const DELETE_AD = 'DELETE_AD';
export const GET_ALL_AD = 'GET_ALL_AD';
export const SET_ALL_AD = 'SET_ALL_AD';

export class GetAllAd implements Action {
  readonly type = GET_ALL_AD;
}
export class SetAllAd implements Action {
  readonly type = SET_ALL_AD;
  constructor(public payload: Ad[]) {}
}
export class AddAD implements Action {
  readonly type = ADD_AD;
  constructor(public payload: Ad) {}
}
export class EditAD implements Action {
  readonly type = EDIT_AD;
  constructor(public payload: { index: number; object: Ad }) {}
}
export class DeleteAD implements Action {
  readonly type = DELETE_AD;
  constructor(public payload: number) {}
}

export type AdsActions = AddAD | EditAD | DeleteAD | GetAllAd | SetAllAd;
