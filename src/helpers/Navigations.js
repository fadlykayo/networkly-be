import { useNavigate, useLocation } from 'react-router-dom';

const navigation = () => {
	const navigate = useNavigate();
	const { state, pathname } = useLocation();

	return {
		navigate,
		state,
		pathname
	};
};

export default navigation;
