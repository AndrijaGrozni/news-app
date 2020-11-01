import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '../UI/Icon/Icon';
// navigators
import TopNewsScreen from '../screens/TopNews/TopNews';
import CategoriesNavigator from './CategoriesNavigator';
import SearchScreen from '../screens/Search/Search';
// icons
import {
	news,
	newsWhite,
	category,
	categoryWhite,
	search,
	searchWhite
} from '../settings/images';

const iconMap = {
	TopNews: {
		DEFAULT: newsWhite,
		FOCUSED: news
	},
	Categories: {
		DEFAULT: categoryWhite,
		FOCUSED: category
	},
	Search: {
		DEFAULT: searchWhite,
		FOCUSED: search
	}
};

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: '#4BD195',
				inactiveTintColor: 'white',
				style: {
					backgroundColor: '#003049',
					borderTopWidth: 0,
					paddingTop: 10
				}
			}}
			screenOptions={({ route }) => ({
				tabBarLabel: `${route.name}`,
				tabBarIcon: ({ focused }) => {
					const icon = focused
						? iconMap[route.name].FOCUSED
						: iconMap[route.name].DEFAULT;

					return <Icon source={icon} width={25} height={24} />;
				}
			})}
		>
			<Tab.Screen name="TopNews" component={TopNewsScreen} />
			<Tab.Screen name="Categories" component={CategoriesNavigator} />
			<Tab.Screen name="Search" component={SearchScreen} />
		</Tab.Navigator>
	);
};

export default HomeNavigator;