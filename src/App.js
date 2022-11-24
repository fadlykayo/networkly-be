import React from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from 'router';
import { Theme, GlobalStyles } from 'constants';
import { Redux } from 'stores';

import './App.css';

const App = () => {
	return (
		<ThemeProvider theme={ Theme }>
			<GlobalStyles />
			<AppRouter />
		</ThemeProvider>
	);
};

export default App;

// <Redux>
// 	<AppRouter />
// </Redux>
