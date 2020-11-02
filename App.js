import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import MainNavigator from './src/navigation/HomeNavigator';
import { theme } from './src/settings/theme/theme';

const queryCache = new QueryCache();

const App = () => {
	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					<MainNavigator />
				</NavigationContainer>
			</ThemeProvider>
		</ReactQueryCacheProvider>
	);
};

export default App;
