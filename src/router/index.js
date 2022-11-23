import React from 'react';
import {
	Routes,
	Route,
	BrowserRouter,
} from 'react-router-dom';
import { Home } from 'pages';
import {
	NavigationSetter,
	Text
} from 'components';
import { GlobalStyles } from 'constants';

import AuthRoutes from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {
	return (
		<BrowserRouter window={ window }>
			<NavigationSetter />
			<GlobalStyles />
			<Routes>
				<Route path='/' element={ <Home /> } />
				{ /* <Route element={ <AuthRoutes /> }>
					<Route path='/login' element={ <LoginPage /> } />
				</Route>
				<Route element={ <PrivateRoute /> }>
					<Route path='/dashboard' element={ <Dashboard /> } />
					<Route path='/detail' element={ <Detail /> } />
				</Route> */ }
				<Route path='*' element={ <Text.H1>404 NOT FOUND</Text.H1> } />
			</Routes>
		</BrowserRouter >
	);
};

export default AppRouter;