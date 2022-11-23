import { NavigateFunction } from 'react-router-dom';

type CustomHistory = {
	navigate: NavigateFunction | null;
	push: (page, options) => void;
};

const History: CustomHistory = {
	navigate: null,
	push: (page, options) => {
		if (History.navigate) {
			History.navigate(page, options);
		}
	},
};

export default History;