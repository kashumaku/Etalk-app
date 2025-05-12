import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { SafeAreaView } from 'react-native-safe-area-context'

const UserProfileScreen = () => {
	return (
		<ThemedView className="flex-1">
			<SafeAreaView className="px-5 pt-5 pb-4">
				<View className="flex-row items-center">
					<Image
						source={{ uri: 'https://i.pravatar.cc/150?img=11' }}
						className="w-20 h-20 rounded-full mr-4"
					/>
					<View className="flex-1">
						<ThemedText className="text-xl font-semibold text-black">
							other user Melaku
						</ThemedText>
						<ThemedText className="text-sm text-neutral-500 dark:text-neutral-400">
							@kassahun
						</ThemedText>
						<ThemedText className="text-sm mt-1 text-neutral-700 dark:text-neutral-300">
							Passionate about tech & travel 🌍
						</ThemedText>
					</View>
				</View>

				<View className="flex-row justify-between my-5">
					<TouchableOpacity
						//    onPress={()=>navigation.navigate('MyPosts')}
						className="items-center"
					>
						<ThemedText className="text-lg font-bold text-black">
							120
						</ThemedText>
						<ThemedText className="text-sm ">Posts</ThemedText>
					</TouchableOpacity>
					<TouchableOpacity
						//    onPress={()=>navigation.navigate('Followers')}
						className="items-center"
					>
						<ThemedText className="text-lg font-bold text-black">
							4.3K
						</ThemedText>
						<ThemedText className="">Followers</ThemedText>
					</TouchableOpacity>
					<TouchableOpacity
						//    onPress={()=>navigation.navigate('Following')}

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

				<TouchableOpacity className="bg-accent items-center p-2 rounded-lg">
					<Text>Follow</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ThemedView>
	)
}

export default UserProfileScreen
