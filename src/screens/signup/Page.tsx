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
import { Controller, useForm } from 'react-hook-form'
import { gql, useMutation } from '@apollo/client'
type FormFields = {
	firstName: string
	middleName: string
	lastName: string
	email: string
	password: string
	confirmPassword: string
}

const SIGNUP_MUTATION = gql`
    mutation signup($data:UserInput){
        signup(data:$data){
            firstName
        }}`
const Signup = () => {
	const [passwordVisible, setPasswordVisible] = useState(false)
	const navigation =
		useNavigation<NativeStackNavigationProp<AppStackParams>>()
        const [triggerSignup,{loading}] = useMutation(SIGNUP_MUTATION)

	const {
		control,
		formState: { errors },
		handleSubmit,
	} = useForm<FormFields>()
	const handleSignup = async(data: FormFields) => {
	console.log(data)
		try {
            const payload = {
                firstName: data.firstName,
                middleName: data.middleName,
                lastName: data.lastName,
                email: data.email,
               password:data.password
            }
            const res = await triggerSignup({variables:{data:payload}})
            navigation.navigate('Login')
            console.log("User signed up ", res)
            
        } catch (err:any) {
            console.log("Error signing up ", err)
            alert(err?.message)
            
        }
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
				<Controller
					control={control}
					rules={{ required: 'First name is required' }}
					name="firstName"
					render={({ field: { onChange, value } }) => (
						<View className="w-full border-b border-accent">
							<ThemedTextInput
								placeholder="First Name"
								value={value}
								onChangeText={(text) => onChange(text)}
							/>
						</View>
					)}
				/>
				<Controller
					control={control}
					rules={{ required: 'Middle name is required' }}
					name="middleName"
					render={({ field: { onChange, value } }) => (
						<View className="w-full border-b border-accent">
							<ThemedTextInput
								placeholder="Middle Name"
								value={value}
								onChangeText={(text) => onChange(text)}
							/>
						</View>
					)}
				/>
				<Controller
					control={control}
					rules={{ required: 'Last name is required' }}
					name="lastName"
					render={({ field: { onChange, value } }) => (
						<View className="w-full border-b border-accent">
							<ThemedTextInput
								placeholder="Last Name"
								value={value}
								onChangeText={(text) => onChange(text)}
							/>
						</View>
					)}
				/>
				<Controller
					control={control}
					rules={{ required: 'Emailis required' }}
					name="email"
					render={({ field: { onChange, value } }) => (
						<View className="w-full border-b border-accent">
							<ThemedTextInput
								placeholder="Email"
								value={value}
								onChangeText={(text) => onChange(text)}
							/>
						</View>
					)}
				/>
				<Controller
					control={control}
					rules={{ required: 'Password is required' }}
					name="password"
					render={({ field: { onChange, value } }) => (
						<View className="w-full border-b border-accent flex-row items-center">
							<ThemedTextInput
								placeholder="Password"
								className="flex-1"
								secureTextEntry={!passwordVisible}
								value={value}
								onChangeText={(text) => onChange(text)}
							/>
							<TouchableOpacity
								onPress={() =>
									setPasswordVisible(!passwordVisible)
								}
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
					)}
				/>
				<Controller
					control={control}
					rules={{ required: 'Confirm password is required' }}
					name="confirmPassword"
					render={({ field: { onChange, value } }) => (
						<View className="w-full border-b border-accent flex-row items-center">
							<ThemedTextInput
								placeholder="Password"
								className="flex-1"
								secureTextEntry={!passwordVisible}
								value={value}
								onChangeText={(text) => onChange(text)}
							/>
							<TouchableOpacity
								onPress={() =>
									setPasswordVisible(!passwordVisible)
								}
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
					)}
				/>

				<ThemedButton
					onPress={handleSubmit(handleSignup)}
					className="items-center justify-center p-4 mt-5 rounded-lg "
				>
					<Text className="text-base font-bold">Sign Up</Text>
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
