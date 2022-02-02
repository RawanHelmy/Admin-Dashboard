import { AuthActions, LOGIN, LOGOUT } from './login.action';

export interface LoginState {
  token: any;
}

const initialState: LoginState = {
  token: null,
};

export function LoginReducer(state = initialState, action: AuthActions) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}
