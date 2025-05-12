import React from 'react'
import {
	View,
	Text,
	Image,
	FlatList,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppStackParams } from '../../types/navigatorParams/AppStackParams'
import { useTheme } from '../../context/themeContext'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'

const mockPosts = Array.from({ length: 12 }, (_, i) => ({
	id: i.toString(),
	uri: `https://images.pexels.com/photos/556669/pexels-photo-556669.jpeg?auto=compress&cs=tinysrgb&w=600`,
}))

const screenWidth = Dimensions.get('window').width
const postSize = screenWidth / 3

export default function ProfileScreen() {
	const navigation =
		useNavigation<NativeStackNavigationProp<AppStackParams>>()
	const insets = useSafeAreaInsets()
	const { isDarkMode, theme, toggleTheme } = useTheme()
	const handleLogout = () => {
		console.log('Logout tapped')
		navigation.navigate('Login')
	}

	const handleThemeToggle = () => {
		toggleTheme()
	}

	return (
		<ThemedView className="flex-1 " style={{ paddingTop: insets.top }}>
			{/* Header */}
			<View className="px-5 pt-5 pb-4 border-b border-neutral-200 dark:border-neutral-800">
				<View className="flex-row items-center">
					<Image
						source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
						className="w-20 h-20 rounded-full mr-4"
					/>
					<View className="flex-1">
						<ThemedText className="text-xl font-semibold text-black">
							Kassahun Melaku
						</ThemedText>
						<ThemedText className="text-sm text-neutral-500 dark:text-neutral-400">
							@kassahun
						</ThemedText>
						<ThemedText className="text-sm mt-1 text-neutral-700 dark:text-neutral-300">
							Passionate about tech & travel 🌍
						</ThemedText>
					</View>
				</View>

				{/* Stats */}
				<View className="flex-row justify-between mt-5">
					<TouchableOpacity
						onPress={() => navigation.navigate('MyPosts')}
						className="items-center"
					>
						<ThemedText className="text-lg font-bold text-black">
							120
						</ThemedText>
						<ThemedText className="text-sm ">Posts</ThemedText>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('Followers')}
						className="items-center"
					>
						<ThemedText className="text-lg font-bold text-black">
							4.3K
						</ThemedText>
						<ThemedText className="">Followers</ThemedText>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('Following')}
						className="items-center"
					>
						<ThemedText className="text-lg font-bold text-black">
							318
						</ThemedText>
						<ThemedText className="text-sm text-neutral-500 dark:text-neutral-400">
							Following
						</ThemedText>
					</TouchableOpacity>
				</View>

				{/* Edit Profile */}
				<TouchableOpacity
					onPress={() => navigation.navigate('EditProfile')}
					className="mt-5 bg-accent py-2 rounded-xl items-center"
				>
					<ThemedText className="text-white font-medium">
						Edit Profile
					</ThemedText>
				</TouchableOpacity>

				{/* Settings Section */}
				<View className="mt-4 gap-5">
					<TouchableOpacity
						onPress={handleThemeToggle}
						className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl"
					>
						<Ionicons name="moon" size={20} color="#FFD700" />
						<ThemedText className="text-black text-base">
							{isDarkMode ? 'Light' : 'Dark'} Mode
						</ThemedText>
					</TouchableOpacity>

					<TouchableOpacity className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl">
						<Feather name="settings" size={20} color="#FFD700" />
						<ThemedText className="text-black text-base">
							Account Settings
						</ThemedText>
					</TouchableOpacity>

					<TouchableOpacity className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl">
						<MaterialIcons
							name="security"
							size={20}
							color="#FFD700"
						/>
						<ThemedText className="text-black text-base">
							Privacy & Security
						</ThemedText>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={handleLogout}
						className="flex-row items-center space-x-3 gap-3 px-4 py-3 rounded-xl"
					>
						<Feather name="log-out" size={20} color="red" />

						<ThemedText className="text-red-600 dark:text-red-300 text-base">
							Logout
						</ThemedText>
					</TouchableOpacity>

					{/* <TouchableOpacity
            onPress={handleLogout}
            className="flex-row items-center justify-center space-x-3 bg-red-100 dark:bg-red-900  px-4 py-3 rounded-xl"
          >
            <Feather name="log-out" size={20} color="red" />
            <ThemedText className="text-red-600 dark:text-red-300 text-base">Logout</ThemedText>
          </TouchableOpacity> */}
				</View>
			</View>

			{/* Posts Grid */}
			<FlatList
				data={mockPosts}
				keyExtractor={(item) => item.id}
				numColumns={3}
				contentContainerStyle={{ paddingBottom: 60 }}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Image
						source={{ uri: item.uri }}
						style={{ width: postSize, height: postSize }}
						className="border border-white dark:border-black"
					/>
				)}
			/>
		</ThemedView>
	)
}
