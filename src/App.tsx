import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppStackNavigator from './navigators/AppStackNavigator'
import { NavigationContainer } from '@react-navigation/native'
import '../global.css'
import { ThemeProvider } from './context/themeContext'

import {ApolloClient, InMemoryCache,ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
    cache:new InMemoryCache(),
    uri:'http://192.168.1.101:5001/graphql'

})
const App = () => {
	return (
		<NavigationContainer>
			<ApolloProvider client={client}>
            <ThemeProvider>
				<AppStackNavigator />
			</ThemeProvider>
            </ApolloProvider>
		</NavigationContainer>
	)
}

export default App
