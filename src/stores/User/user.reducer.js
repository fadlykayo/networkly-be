import { fromJS } from 'immutable';

import { Dispatches } from 'constants';

/* Direct mutation of reducer state is prohibited.
Therefore, we must assign a new object where it takes a copy of our current state.
Immutable.JS have been designed to overcome the issues with immutability inherent within JavaScript,
providing all the benefits of immutability with the performance your app requires. */

const initialState = fromJS({
	token: {},
	data: {},
	isLoading: false,
});

export default (state = initialState, action) => {
	switch (action.type) {
		case Dispatches.LOGIN:
			return {
				token: action.payload.token,
				data: action.payload.data,
			};

		case Dispatches.USER_LOADING_START:
			return {
				isLoading: false,
			};

		case Dispatches.USER_LOADING_END:
		case Dispatches.FORCE_LOADING_END:
			return {
				isLoading: false,
			};

		case Dispatches.LOGOUT:
			return {
				token: {},
				data: {},
				isLoading: false,
			};

		default:
			return state;
	}
};
