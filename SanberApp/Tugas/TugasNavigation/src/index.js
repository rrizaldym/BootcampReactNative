import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Register from './Register';
import Setting from './Setting';
import Splash from './Splash';

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const index = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={Splash}>
                <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Setting" component={Setting} />
                <Stack.Screen name="MainApp" component={MainApp} />
                <Stack.Screen name="MyDrawwer" component={MyDrawwer}/>
            </Stack.Navigator>
      </NavigationContainer>
    )
}
const MainApp =() =>{
    return(
        <Tabs.Navigator>
            <Tabs.Screen name="Login" component={Login} />
            <Tabs.Screen name="Register" component={Register} />
        </Tabs.Navigator>
    )
}
const MyDrawwer = ()=>{
    return(
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
    )
}
export default index

const styles = StyleSheet.create({})
