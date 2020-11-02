import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import MainNavigator from './src/navigation/HomeNavigator';
import { theme } from './src/settings/theme/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<NavigationContainer>
				<MainNavigator />
			</NavigationContainer>
		</ThemeProvider>
	);
};

export default App;
