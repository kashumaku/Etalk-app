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
import PostCard from './components/PostCard'

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
	return (
		<FlatList
			data={posts}
			keyExtractor={(item) => item.id}
			renderItem={({item})=><PostCard item={item}/>}
			pagingEnabled
			showsVerticalScrollIndicator={false}
			snapToAlignment="start"
			decelerationRate="fast"
		/>
	)
}
