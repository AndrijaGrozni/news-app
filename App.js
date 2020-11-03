import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './src/navigation/RootNavigation';
// global state
import { AppProvider } from './src/context/AppProvider';
import { theme } from './src/settings/theme/theme';
// screens
import HomeNavigator from './src/navigation/HomeNavigator';
import SingleNewsScreen from './src/screens/SingleNews/SingleNews';

const queryCache = new QueryCache();

const Stack = createStackNavigator();

const App = () => {
	React.useEffect(() => {
		return () => {
			isReadyRef.current = false;
		};
	}, []);

	return (
		<AppProvider>
			<ReactQueryCacheProvider queryCache={queryCache}>
				<ThemeProvider theme={theme}>
					<NavigationContainer
						ref={navigationRef}
						onReady={() => {
							isReadyRef.current = true;
						}}
					>
						<Stack.Navigator>
							<Stack.Screen
								name="Home"
								component={HomeNavigator}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="Single News"
								component={SingleNewsScreen}
								options={{ headerShown: false }}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</ThemeProvider>
			</ReactQueryCacheProvider>
		</AppProvider>
	);
};

export default App;
