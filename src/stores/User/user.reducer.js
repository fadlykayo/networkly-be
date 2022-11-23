import { fromJS } from 'immutable';

import { Dispatches } from 'consts';

/* Direct mutation of reducer state is prohibited.
Therefore, we must assign a new object where it takes a copy of our current state.
Immutable.JS have been designed to overcome the issues with immutability inherent within JavaScript,
providing all the benefits of immutability with the performance your app requires. */

const initialState = fromJS({
  id: '',
  token: {},
  refresh_token: {},
  user: {},
  profile_picture: '',
  isLoading: false,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case Dispatches.REQUEST_OTP:
      return state.set('id', fromJS(action.payload.id));

    case Dispatches.LOGIN:
    case Dispatches.REGENERATE_TOKEN:
      return state
        .set('token', fromJS(action.payload.token))
        .set('refresh_token', fromJS(action.payload.refresh_token))
        .set('user', fromJS(action.payload.user));

    case Dispatches.CHANGE_PHONE_NUMBER:
      return state.setIn(['user', 'phone'], fromJS(action.payload.phone));

    case Dispatches.REGISTER:
      return state.setIn(['user', 'email'], fromJS(action.payload.email));

    case Dispatches.SET_PROFILE_PICTURE:
      return state.setIn(['user', 'photo'], fromJS(action.payload.newPhoto));
      // return state.set('profile_picture', fromJS(action.payload));

    case Dispatches.USER_LOADING_START:
      return state.set('isLoading', true);

    case Dispatches.USER_LOADING_END:
    case Dispatches.FORCE_LOADING_END:
      return state.set('isLoading', false);

    case Dispatches.LOGOUT:
      return fromJS({
        id: '',
        token: {},
        refresh_token: {},
        user: {},
        profile_picture: '',
        isLoading: false,
      });

    default:
      return state;
  }
};
