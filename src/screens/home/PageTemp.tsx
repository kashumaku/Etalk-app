import React from 'react'
import {
	View,
	Text,
	FlatList,
	Image,
	TouchableOpacity,
	Dimensions,
} from 'react-native'
import { FontAwesome, Feather, AntDesign, Ionicons } from '@expo/vector-icons'

const { height } = Dimensions.get('window')

// Mock post data
const posts = [
	{
		id: '1',
		media: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
		caption: 'Exploring the mountains 🏔️',
		user: {
			name: 'Jane Doe',
			username: 'janedoe',
			profilePic:
				'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600',
		},
		likes: 128,
		comments: 34,
	},
	{
		id: '29',
		media: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
		caption: 'Sunset vibes 🌅',
		user: {
			name: 'John Smith',
			username: 'johnsmith',
			profilePic:
				'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
		},
		likes: 284,
		comments: 67,
	},
	{
		id: '26',
		media: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
		caption: 'Sunset vibes 🌅',
		user: {
			name: 'John Smith',
			username: 'johnsmith',
			profilePic:
				'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
		},
		likes: 284,
		comments: 67,
	},
	{
		id: '254',
		media: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
		caption: 'Sunset vibes 🌅',
		user: {
			name: 'John Smith',
			username: 'johnsmith',
			profilePic:
				'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600',
		},
		likes: 284,
		comments: 67,
	},
]

export default function HomeScreen() {
	const TAB_BAR_HEIGHT = 30
	const { height: SCREEN_HEIGHT } = Dimensions.get('window')
	const POST_HEIGHT = SCREEN_HEIGHT - TAB_BAR_HEIGHT

	const renderPost = ({ item }: any) => (
		<View
			className="relative w-full bg-black"
			style={{ height: POST_HEIGHT }}
		>
			<Image
				source={{ uri: item.media }}
				className="absolute top-0 left-0 w-full h-full"
				resizeMode="cover"
			/>

			{/* Bottom overlay with caption and follow */}
			<View className="absolute bottom-5 left-0 w-full px-4 py-6 bg-gradient-to-t from-black/80 to-transparent">
				<View className="flex-row items-center justify-between mb-2">
					<View className="flex-row items-center space-x-3">
						<Image
							source={{ uri: item.user.profilePic }}
							className="w-10 h-10 rounded-full"
						/>
						<Text className="text-white font-semibold text-lg">
							{item.user.name}
						</Text>
						<TouchableOpacity className="bg-accent px-4 py-1 rounded-full">
							<Text className="text-[#555] font-medium text-sm">
								Follow
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<Text className="text-[#EEE] text-base max-w-[80%]">
					{item.caption} dkjlkksdhfosdjfjlsdkjfls djfsdjk dkjfojsd
					sadkjof ajsdokfs askdfjoska dsjfkas dkjfsa sakdjf asdjkosa 
				</Text>
			</View>

			{/* Action buttons (bottom-right) */}
			<View className="absolute bottom-20 gap-4 right-4 items-center space-y-6">
				{/* Profile + follow */}
				<TouchableOpacity className="items-center">
					<View className="relative">
						<Image
							source={{ uri: item.user.profilePic }}
							className="w-12 h-12 rounded-full border-2 border-white"
						/>
						<View className="absolute bottom-0 right-0 bg-accent rounded-full p-[2px]">
							<Feather name="plus" size={14} color="#fff" />
						</View>
					</View>
				</TouchableOpacity>

				{/* Like */}
				<TouchableOpacity className="items-center">
					<AntDesign
						// onPress={toggleLike}
						name="heart"
						size={40}
						color="#FFF"
					/>
					<Text className="text-white text-sm">{item.likes}</Text>
				</TouchableOpacity>

				{/* Comment */}
				<TouchableOpacity className="items-center">
					<Ionicons
						// onPress={() => setShowCommentModal(true)}
						name="chatbubble-ellipses-sharp"
						size={40}
						color="#FFF"
					/>
					<Text className="text-white text-sm">{item.comments}</Text>
				</TouchableOpacity>
			</View>
		</View>
	)

	return (
		<FlatList
			data={posts}
			keyExtractor={(item) => item.id}
			renderItem={renderPost}
			pagingEnabled
			showsVerticalScrollIndicator={false}
			snapToAlignment="start"
			decelerationRate="fast"
		/>
	)
}
