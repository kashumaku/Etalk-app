import { View, Text, Pressable } from 'react-native'
import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeTabParams } from '../types/navigatorParams/HomeTabParams'
import NewPost from '../screens/post/newPost/Page'
import Profile from '../screens/profile/Page'
import Entypo from '@expo/vector-icons/Entypo'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useTheme } from '../context/themeContext'
import { darkTheme, lightTheme } from '../theme/color'
import HomeScreen from '../screens/home/Page'

const Tab = createBottomTabNavigator<HomeTabParams>()
const HomeTabNavigator = () => {
	const { isDarkMode } = useTheme()
	const theme = isDarkMode ? darkTheme : lightTheme
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: theme.gray,
					height: 70,
					borderTopWidth: 0,
					elevation: 10,
				},
				tabBarIcon: ({ focused, color, size }) => {
					let iconName

					if (route.name === 'Home') {
						return (
							<Entypo
								name="home"
								size={35}
								color={focused ? theme.accent : '#444'}
							/>
						)
					} else if (route.name === 'NewPost') {
						return (
							<View
								className="rounded-full h-16 w-16 items-center justify-center  -mt-6  "
								style={{
									backgroundColor: focused
										? theme.accent
										: theme.background,
								}}
							>
								<Ionicons
									name="add-circle-sharp"
									size={40}
									color="#555"
								/>
							</View>
						)
					} else if (route.name === 'Profile') {
						return (
							<FontAwesome
								name="user"
								size={30}
								color={focused ? theme.accent : '#444'}
							/>
						)
					}
				},
				tabBarButton: (props) => (
					<Pressable
						android_ripple={null}
						style={{ alignItems: 'center' }}
						onPress={props.onPress}
						onLongPress={props.onLongPress}
						testID={props.testID}
						//   style = {{backgroundColor:'#FFF'}}
					>
						{props.children}
					</Pressable>
				),
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen
				name="NewPost"
				component={NewPost}
				options={{
					tabBarLabel: 'New',
				}}
			/>
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	)
}

export default HomeTabNavigator
