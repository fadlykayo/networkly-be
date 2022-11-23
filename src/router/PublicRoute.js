import React from 'react';
import { useSelector } from 'react-redux';
import {
	Navigate,
	Outlet
} from 'react-router-dom';

const AuthRoute = () => {
	const tokenSelectorProps = useSelector(state => state.user.token);

	if (tokenSelectorProps) {
		return <Navigate to='/dashboard' replace />;
	}
	return <Outlet />;
};

export default AuthRoute;