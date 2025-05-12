import {
	View,
	TouchableOpacity,
	useColorScheme,
	Text,
	TextInput,
    ActivityIndicator,
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
import { gql, useMutation, useQuery } from '@apollo/client'
import { useStore } from '../modals/useStores'
import { observer } from 'mobx-react-lite'

const GET_USERS = gql`
	query getAllUsers {
		getAllUsers {
			id
			firstName
		}
	}
`
const LOGIN_MUTATION = gql`
    mutation loginMutation($email:String,$password:String){
        login(email:$email,password:$password){
            accessToken
        }
    }
`
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
	const [passwordVisible, setPasswordVisible] = useState(false)
    const {authenticationStore:{setAccessToken, setRefreshToken,setIsAuthenticated}} = useStore()
	const navigation =
		useNavigation<NativeStackNavigationProp<AppStackParams>>()
	const { toggleTheme, isDarkMode } = useTheme()
	const theme = isDarkMode ? darkTheme : lightTheme
	const { data, error, loading,refetch } = useQuery(GET_USERS)
    const [triggerLogin,{loading:isLoginLoading, error:loginError, data:loginData}] = useMutation(LOGIN_MUTATION)
    const handleLogin = async() => {
      try {
        const res = await triggerLogin({variables:{email,password}})
        const data = res.data?.login
        console.log("log res ",data)
        setIsAuthenticated(true)
        setRefreshToken(data?.refreshToken)
        setAccessToken(data?.accessToken)
         // navigation.navigate('HomeTab')
      } catch (err:any) {
        console.log("Error loging ",JSON.stringify(err, null,2))
        alert(err?.message)
      }
    }
	// console.log('Applo data = ', data)
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
					<ThemedTextInput placeholder="Email" 
                     onChangeText={(text)=>setEmail(text)}
                     value={email}
                    />
				</View>
				<View className="w-full border-b border-accent flex-row items-center">
					<ThemedTextInput
						placeholder="Password"
						className="flex-1"
						secureTextEntry={!passwordVisible}
                        onChangeText={(text)=>setPassword(text)}
                        value={password}
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
                disabled = {isLoginLoading}
					onPress={handleLogin}
					className="items-center justify-center p-4 rounded-lg"
				>
					{isLoginLoading?<ActivityIndicator/>:<Text className="text-base font-bold">Login</Text>}
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

export default observer(Login)
