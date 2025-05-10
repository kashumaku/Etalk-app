import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {AppStackParams} from '../types/navigatorParams/AppStackParams'
import Login from '../screens/login/Page'
import Signup from '../screens/signup/Page'
import HomeTabNavigator from './HomeTabNavigator'
const Stack = createNativeStackNavigator<AppStackParams>()
const AppStackNavigator = () => {
  return (
<Stack.Navigator 
screenOptions={{
    headerShown: false,
    animation: 'slide_from_right'
    
}}
>
<Stack.Screen name='HomeTab' component={HomeTabNavigator}/>
    <Stack.Screen name='Login' component={Login}/>
    <Stack.Screen name='Signup' component={Signup}/>
</Stack.Navigator>
  )
}

export default AppStackNavigator