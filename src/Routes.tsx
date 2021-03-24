import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import TabBar from './components/TabBar';

const Tab = createBottomTabNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Tab.Navigator tabBar={props => <TabBar {...props} />} >
				<Tab.Screen
					name="Home"
					component={Home}
					options={{
						tabBarLabel: 'Procurar'
					}}
				/>
				<Tab.Screen
					name="Favorites"
					component={Favorites}
					options={{
						tabBarLabel: 'Favoritos'
					}} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}