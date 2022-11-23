import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppRouter from 'router';
import { Redux } from 'stores';
import { Home } from 'pages';

import './App.css';

const App = () => {
	return (
		<AppRouter />
	);
};

export default App;

// <Redux>
// 	<AppRouter />
// </Redux>
