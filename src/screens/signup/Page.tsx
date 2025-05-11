import { View, Text, useColorScheme, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AppStackParams } from '../../types/navigatorParams/AppStackParams'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import ThemedTextInput from '../../components/ThemedTextInput'
import Ionicons from '@expo/vector-icons/Ionicons'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import ThemedButton from '../../components/ThemedButton'

const Signup = () => {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const navigation =
		useNavigation<NativeStackNavigationProp<AppStackParams>>()
	const generateUserName = (email: string) => {
		const [userNamePart] = email.split('@')

		return '@' + userNamePart
	}
	const handleSignup = () => {
		const payload = {
			firstName: 'Kassahun',
			middleName: 'Melaku',
			lastName: 'Endalew',
			email: 'kassahun@email.com',
			password: '1234',
			userName: generateUserName('kassahun@email.com'),
		}
		fetch('http://10.0.2.2:5000/api/user', {
			method: 'post',
			body: JSON.stringify(payload),
            headers:{
                'Content-Type':'application/json'
            }
		})
			.then((res) => {
				console.log('user created')
			})
			.catch((err) => console.log('Error creating user', err))
	}
	return (
		<ThemedView className="flex-1 items-center justify-center p-5 gap-10">
			<View className="items-center gap-3">
				<Text className="text-3xl font-bold text-accent">
					Create Account
				</Text>
				<ThemedText className="text-lg font-bold">
					Welcome to Etalk you've been missed!
				</ThemedText>
			</View>
			<View className="w-[80%] gap-3">
				<View className="w-full border-b border-accent">
					<ThemedTextInput placeholder="First Name" />
				</View>
				<View className="w-full border-b border-accent">
					<ThemedTextInput placeholder="Middle Name" />
				</View>
				<View className="w-full border-b border-accent">
					<ThemedTextInput placeholder="Last Name" />
				</View>
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
				<View className="w-full border-b border-accent flex-row items-center">
					<ThemedTextInput
						placeholder="Confirm Password"
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

				<ThemedButton
					onPress={handleSignup}
					className="items-center justify-center p-4 mt-5 rounded-lg "
				>
					<ThemedText className="text-base font-bold">
						Sign Up
					</ThemedText>
				</ThemedButton>
			</View>
			<View className="flex-row items-center gap-1">
				<ThemedText>Have no account?</ThemedText>
				<TouchableOpacity onPress={() => navigation.navigate('Login')}>
					<Text className="text-accent">Login</Text>
				</TouchableOpacity>
			</View>
		</ThemedView>
	)
}

export default Signup
