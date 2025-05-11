import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PostCard from './components/PostCard'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
	const post = [
		{
			id: 1,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/images/l2.jpg'),
		},
		{
			id: 2,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/images/l4.jpg'),
		},
		{
			id: 3,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/images/l3.jpg'),
		},
		{
			id: 399,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/video/v1.mp4'),
            type:'video'
		},

		{
			id: 4,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/images/ladi1.jpg'),
		},
		{
			id: 6,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/images/l3.jpg'),
		},

		{
			id: 45,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/images/ladi1.jpg'),
		},
		{
			id: 33,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/images/l3.jpg'),
		},

		{
			id: 94,
			title: 'Post 1',
			content: 'This is the content of post 1',
			image: require('../../../assets/images/ladi1.jpg'),
		},
	]
	return (
		<>
        <StatusBar style='dark'/>
        	<FlatList
				data={post}
				renderItem={({ item }) => <PostCard post={item} />}
				keyExtractor={(item) => item.id.toString()}
                snapToAlignment='start'
                decelerationRate='fast'
				pagingEnabled
			/>
        </>
	)
}

export default Home
