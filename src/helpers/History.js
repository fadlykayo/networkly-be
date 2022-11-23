const history = {
	navigate: null,
	push: (page, options) => {
		if (History.navigate) {
			History.navigate(page, options);
		}
	},
};

export default history;