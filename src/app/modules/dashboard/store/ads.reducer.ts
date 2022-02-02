import {
  ADD_AD,
  AdsActions,
  DELETE_AD,
  EDIT_AD,
  SET_ALL_AD,
} from './ads.actions';

import { Ad } from '../models/ads.model';

export interface AdListState {
  ads: Ad[];
}

const initialState: AdListState = {
  ads: [],
};

export function adsListReducer(
  state = initialState,
  action: AdsActions
): AdListState {
  switch (action.type) {
    case SET_ALL_AD:
      return {
        ...state,
        ads: [...state.ads, ...action.payload],
      };
    case ADD_AD:
      return {
        ...state,
        ads: [...state.ads, action.payload],
      };
    case EDIT_AD:
      // update the existing ad with the new one
      const newAd = {
        ...state.ads[action.payload.index],
        ...action.payload.object,
      };
      // create new list with the updated ad
      const newList = [...state.ads];
      newList[action.payload.index] = newAd;
      // replace the old ad list
      return {
        ...state,
        ads: [...newList],
      };
    case DELETE_AD:
      return {
        ...state,
        ads: [...state.ads.filter((ad, index) => index != action.payload)],
      };
    default:
      return state;
  }
}
