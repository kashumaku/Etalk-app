import {
	View,
	TouchableOpacity,
	useColorScheme,
	Text,
	TextInput,
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppStackParams } from '../../types/navigatorParams/AppStackParams'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedButton from '../../components/ThemedButton'
import Ionicons from '@expo/vector-icons/Ionicons'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useTheme } from '../../context/themeContext'
import { darkTheme, lightTheme } from '../../theme/color'
const Login = () => {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const navigation =
		useNavigation<NativeStackNavigationProp<AppStackParams>>()
	const { toggleTheme, isDarkMode } = useTheme()
	const theme = isDarkMode ? darkTheme : lightTheme
	const handleLogin = () => {
		navigation.navigate('HomeTab')
	}
	return (
		<ThemedView className="flex-1 items-center justify-center p-5 gap-10">
			<TouchableOpacity onPress={toggleTheme}>
				<ThemedText>Change theme</ThemedText>
			</TouchableOpacity>
			<View className="items-center gap-3">
				<Text className="text-3xl font-bold text-accent">Login</Text>
				<ThemedText className="text-lg font-bold">
					Welcome to Etalk you've been missed!
				</ThemedText>
			</View>
			<View className="w-[80%] gap-3">
				<View className="w-full border-b border-accent">
					<ThemedTextInput placeholder="Email" />
				</View>
				<View className="w-full border-b border-accent flex-row items-center">
					<ThemedTextInput
						placeholder="Password"
						className="flex-1"
						secureTextEntry={!passwordVisible}
					/>
					<TouchableOpacity
						onPress={() => setPasswordVisible(!passwordVisible)}
					>
						{passwordVisible ? (
							<Ionicons
								name="eye-outline"
								size={24}
								color="#FFD700"
							/>
						) : (
							<Ionicons
								name="eye-off-outline"
								size={24}
								color="#FFD700"
							/>
						)}
					</TouchableOpacity>
				</View>
				<TouchableOpacity className="self-end">
					<Text className="text-base font-bold text-accent">
						forgot your password
					</Text>
				</TouchableOpacity>
				<ThemedButton
					onPress={handleLogin}
					className="items-center justify-center p-4 rounded-lg"
				>
					<Text className="text-base font-bold">Login</Text>
				</ThemedButton>
			</View>
			<View className="flex-row items-center gap-1">
				<ThemedText>Have no account?</ThemedText>
				<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
					<Text className="text-accent">Signup</Text>
				</TouchableOpacity>
			</View>
		</ThemedView>
	)
}

export default Login
