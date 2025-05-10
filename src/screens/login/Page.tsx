import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppStackParams } from '../../types/navigatorParams/AppStackParams'

const Login = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AppStackParams>>()
    const colorScheme = useColorScheme(); 
  return (
    <View className={`${colorScheme !== 'dark' ? 'dark' : ''} flex-1 items-center justify-center`}>
        <TouchableOpacity
        onPress={() => navigation.navigate('HomeTab')}
        className="bg-white dark:bg-golden rounded-full p-4"
      >
        <Text className="text-black dark:text-white">Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login