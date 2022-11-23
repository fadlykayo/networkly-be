import { Actions } from 'react-native-router-flux';

import { Api } from 'utils';
import {
	Endpoints,
	Dispatches,
	Images,
} from 'consts';

export default {
	register: data => {
		return Api.request(
			Endpoints.REGISTER,
			data,
			(response, dispatch, success) => {
				if (success) {
					dispatch({
						type: Dispatches.REGISTER,
						payload: {
							email: data.email,
						},
					});

					Actions.tnc({ fromRegister: true });
				}
			},
			(response, dispatch) => {
				dispatch({
					type: Dispatches.THROW_ERROR,
					payload: {
						message: response.msg || response.message,
						content_message: response.content_msg || response.message,
					},
				});
			},
			dispatch => {
				dispatch({
					type: Dispatches.USER_LOADING_START,
				});
			},
			dispatch => {
				dispatch({
					type: Dispatches.USER_LOADING_END,
				});
			},
		);
	},

	login: data => {
		return Api.request(
			Endpoints.LOGIN,
			data,
			(response, dispatch, success) => {
				if (success) {
					dispatch({
						type: Dispatches.LOGIN,
						payload: response,
					});

					Actions.reset('home');
				}
			},
			(response, dispatch) => {
				dispatch({
					type: Dispatches.THROW_ERROR,
					payload: {
						message: response.msg || response.message,
						content_message: response.content_msg || response.message,
					},
				});
			},
			dispatch => {
				dispatch({
					type: Dispatches.USER_LOADING_START,
				});
			},
			dispatch => {
				dispatch({
					type: Dispatches.USER_LOADING_END,
				});
			},
		);
	},


	changePassword: data => {
		return Api.request(
			Endpoints.CHANGE_PASSWORD,
			data,
			(response, dispatch, success) => {
				if (success) {
					dispatch({
						type: Dispatches.CHANGE_PASSWORD,
					});

					Actions.pop();
				}
			},
			(response, dispatch) => {
				dispatch({
					type: Dispatches.THROW_ERROR,
					payload: {
						message: response.msg || response.message,
						content_message: response.content_msg || response.message,
					},
				});
			},
			dispatch => {
				dispatch({
					type: Dispatches.USER_LOADING_START,
				});
			},
			dispatch => {
				dispatch({
					type: Dispatches.USER_LOADING_END,
				});
			},
		);
	},

	forgotPassword: data => {
		return Api.request(
			Endpoints.FORGOT_PASSWORD,
			data,
			(response, dispatch, success) => {
				if (success) {
					dispatch({
						type: Dispatches.FORGOT_PASSWORD,
					});

					Actions.pop();
				}
			},
			(response, dispatch) => {
				dispatch({
					type: Dispatches.THROW_ERROR,
					payload: {
						message: response.msg || response.message,
						content_message: response.content_msg || response.message,
					},
				});
			},
			dispatch => {
				dispatch({
					type: Dispatches.USER_LOADING_START,
				});
			},
			dispatch => {
				dispatch({
					type: Dispatches.USER_LOADING_END,
				});
			},
		);
	},

	logout: () => {
		return async (dispatch, getState) => {
			await dispatch({
				type: Dispatches.LOGOUT,
			});

			Actions.reset('resource');
		};
	},
};
