/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdminScreen from "./screens/AdminScreen";
import UserScreen from "./screens/UserScreen";

const Stack=createStackNavigator();
// const Tab = createBottomTabNavigator();
const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='User'>
                <Stack.Screen name='Admin' component={AdminScreen}/>
                <Stack.Screen name='User' component={UserScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;