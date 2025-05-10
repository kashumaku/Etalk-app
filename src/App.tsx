import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppStackNavigator from './navigators/AppStackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import "../global.css"
import { ThemeProvider } from '../context/themeContext'
const App = () => {
	return (
		<NavigationContainer>
			<ThemeProvider>
            <AppStackNavigator />
            </ThemeProvider>
		</NavigationContainer>
	)
}

export default App
