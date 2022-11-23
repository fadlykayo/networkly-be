const history = {
	navigate: null,
	push: (page, options) => {
		if (History.navigate) {
			History.navigate(page, options);
			/* 
			options?: {
				replace?: boolean;
				state?: any;
				relative?: RelativeRoutingType;
			}
			*/
		}
	},
};

export default history;