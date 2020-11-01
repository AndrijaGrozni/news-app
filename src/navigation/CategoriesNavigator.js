import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import CategoriesScreen from '../screens/Categories/Categories';
import Category from '../screens/Category/Category';

const CategoriesStack = createStackNavigator();

const CategoriesNavigator = () => {
	return (
		<CategoriesStack.Navigator>
			<CategoriesStack.Screen
				name="Categories"
				component={CategoriesScreen}
				options={{ headerShown: false }}
			/>
			<CategoriesStack.Screen
				name="Category"
				component={Category}
				options={{ headerShown: false }}
			/>
		</CategoriesStack.Navigator>
	);
};

export default CategoriesNavigator;
