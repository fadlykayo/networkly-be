import { Fetch } from 'utils';

const getAnswersAction = async (params, data) => {
	try {
		const uri = params
			? `?login_code=${ params.login_code ? params.login_code : '' }&member_code=${ params.member_code ? params.member_code : '' }&question_code=${ params.question_code ? params.question_code : '' }&order=${ params.order ? params.order : '' }&sort=${ params.sort ? params.sort : '' }&keyword=${ params.keyword ? params.keyword : '' }&answered=${ params.answered ? params.answered : '' }&favorite_by=${ params.favorite_by ? params.favorite_by : '' }&type=${ params.type ? params.type : '' }&limit=${ params.limit ? params.limit : '' }`
			: '';

		const response = await Fetch(`${ Endpoints.url }${ Endpoints.param.answers }${ uri }`, 'GET', data, false);
		const res = await response.json();

		if (res.data) {
			res.data = res.data;
		} else {
			res.data = [];
		}

		return res;
	} catch (error) {
		console.log('[getAnswers Action Error]: ', error);
		throw error;
	}
};

export const answerLoading = () => ({
	type: 'GET_ANSWERS',
});

export const getAnswersSuccess = payload => ({
	type: 'GET_ANSWERS_SUCCESS',
	payload: {
		...payload
	},
});

export const getAnswers = (dispatch, getState) => (params, body) => {
	return new Promise(async (resolve, reject) => {
		await dispatch(answerLoading());
		const apiFetch = await getAnswersAction(params, body);

		const { stat_code, data, stat_msg, pagination } = apiFetch;
		if (stat_code === 'APP:SUCCESS') {
			resolve(dispatch(getAnswersSuccess({ data: data, pagination: pagination })));
		} else {
			reject(stat_msg);
		}
	});
};