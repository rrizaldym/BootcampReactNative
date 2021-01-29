import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'

import About from './AboutScreen'
import Add from './AddScreen'
import Login from './LoginScreen'
import Project from './ProjectScreen'
import Skill from './SkillScreen'

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


const TabsScreen = () =>(
    <Tabs.Navigator>
        <Tabs.Screen
            name='Skill'
            component={Skill}
        />
        <Tabs.Screen
            name='Project'
            component={Project}
        />
        <Tabs.Screen
            name='Add'
            component={Add}
        />
    </Tabs.Navigator>
)

const DrawerScreen = () =>(
    <Drawer.Navigator>
        <Drawer.Screen
            name='Home'
            component={TabsScreen}
        />
        <Drawer.Screen
            name='About'
            component={About}
        />
    </Drawer.Navigator>
)

export default index = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login' 
                    component={Login} 
                    options={{title: "Log in"}}
                />
                <Stack.Screen 
                    name='Home'
                    component={DrawerScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}