import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppStackParams } from '../types/navigatorParams/AppStackParams'
import Login from '../screens/login/Page'
import Signup from '../screens/signup/Page'
import HomeTabNavigator from './HomeTabNavigator'
import OnBoarding from '../screens/onBoarding/Page'
import { StatusBar } from 'expo-status-bar'
import { useTheme } from '../context/themeContext'
import { darkTheme, lightTheme } from '../theme/color'
import MyPostsScreen from '../screens/post/myPosts/page'
import EditProfileScreen from '../screens/profile/editProfile/page'
import FollowersScreen from '../screens/follow/followers/Page'
import FollowingScreen from '../screens/follow/following/Page'
import UserProfileScreen from '../screens/profile/userProfile/page'
import { observer } from 'mobx-react-lite'
import { useStore } from '../screens/modals/useStores'
const Stack = createNativeStackNavigator<AppStackParams>()
const AppStackNavigator = () => {
	const { isDarkMode } = useTheme()
	const theme = isDarkMode ? darkTheme : lightTheme
    const {authenticationStore:{isAuthenticated}}  = useStore()
	return (
		<>
			<StatusBar style={isDarkMode ? 'light' : 'dark'} />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
					animation: 'slide_from_right',
				}}
			>
                {isAuthenticated?<>
				<Stack.Screen name="HomeTab" component={HomeTabNavigator} />
				<Stack.Screen name="MyPosts" component={MyPostsScreen} />
                
                <Stack.Screen name="Followers" component={FollowersScreen} />
                <Stack.Screen name="Following" component={FollowingScreen} />
                <Stack.Screen
                    name="UserProfile"
                    component={UserProfileScreen}
                />
				<Stack.Screen
					name="EditProfile"
					component={EditProfileScreen}
				/>
                </>:<>

				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="OnBoarding" component={OnBoarding} />
				<Stack.Screen name="Signup" component={Signup} />
                </>}
			</Stack.Navigator>
		</>
	)
}

export default observer(AppStackNavigator)
