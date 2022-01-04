import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CauseDetail from "./src/screens/CauseDetail";
import CauseList from "./src/screens/CauseList";
import Home from "./src/screens/Home";
import Community from "./src/screens/Community";
import CommunityImpact from "./src/components/communityImpact";
import Icon from 'react-native-vector-icons/Feather'
const Stack = createStackNavigator();  // creates object for Stack Navigator
const Tab = createMaterialTopTabNavigator();
const BTab = createBottomTabNavigator();
const CustomExploreNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Cause"
        >
            <Stack.Screen
                name="Cause"
                component={CauseList}
            />
            <Stack.Screen
                name="CauseDetail"
                component={CauseDetail}
            />
        </Stack.Navigator>
    );
}

const CustomBottomNav = () => {
    return (
        <BTab.Navigator
            initialRouteName="Explore"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Explore') {
                        iconName = 'search';
                    } else if (route.name === 'Community') {
                        iconName = 'users'
                    }
                    return (<Icon name={iconName} size={size} color={color} />)
                },
                tabBarActiveTintColor: '#FFAE42',
                tabBarInactiveTintColor: 'white',
                tabBarActiveBackgroundColor: "black",
                tabBarInactiveBackgroundColor: "black"
            })}
        >
            <BTab.Screen name="Home" component={Home} />
            <BTab.Screen name="Explore" component={CustomExploreNavigator} />
            <BTab.Screen name="Community" component={Community} />
        </BTab.Navigator>
    )
}
export { CustomExploreNavigator, CustomBottomNav };