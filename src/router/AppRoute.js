import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    Home,
    Communities
} from '../pages'
import {
    TabBar
} from '../components/layout'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Communities" component={Communities} />
        </Tab.Navigator>
    );
}