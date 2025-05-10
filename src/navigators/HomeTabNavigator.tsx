import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTabParams } from '../types/navigatorParams/HomeTabParams'
import Home from '../screens/home/Page'
import NewPost from '../screens/newPost/Page'
import Profile from '../screens/profile/Page'

const Tab = createBottomTabNavigator<HomeTabParams>()
const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
        headerShown: false,
        tabBarStyle:{
            marginTop:0
        }
        
        
    }}
    >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='NewPost' component={NewPost} />
        <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default HomeTabNavigator