import { AdListState, adsListReducer } from '../../dashboard/store/ads.reducer';
import { LoginReducer, LoginState } from '../../login/store/login.reducer';

import { ActionReducerMap } from '@ngrx/store';

export const rootReducer = {};

export interface AppState {
  AdList: AdListState;
  Login: LoginState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  AdList: adsListReducer,
  Login: LoginReducer,
};
