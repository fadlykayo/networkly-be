import React from 'react';
import { useSelector } from 'react-redux';
import {
	Navigate,
	Outlet
} from 'react-router-dom';

const PrivateRoute = () => {
	const tokenSelectorProps = useSelector(state => state.user.token);

	if (tokenSelectorProps) {
		return <Outlet />;
	}
	return <Navigate to='/login' replace />;
};

export default PrivateRoute;