import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import HomeNavigator from './HomeNavigator';
import SingleNewsScreen from '../screens/SingleNews/SingleNews';

const MainStack = createStackNavigator();

const MainNavigator = () => {
	return (
		<MainStack.Navigator>
			<MainStack.Screen
				name="Home"
				component={HomeNavigator}
				options={{ headerShown: false }}
			/>
			<MainStack.Screen name="Single News" component={SingleNewsScreen} />
		</MainStack.Navigator>
	);
};

export default MainNavigator;
