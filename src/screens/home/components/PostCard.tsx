import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	Dimensions,
	Modal,
	Pressable,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { useTheme } from '../../../../context/themeContext'
import ThemedButton from '../../../components/ThemedButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import Video, { VideoRef } from 'react-native-video'

const VideoPlayerCard = ({ post }: { post: any }) => {
	const [isPlaying, setIsPlaying] = useState(true)
	const videoRef = useRef<VideoRef>(null)
	const togglePause = () => {
		if (isPlaying) {
			videoRef.current?.pause()
			setIsPlaying(false)
		} else {
			videoRef.current?.resume()
			setIsPlaying(true)
		}
	}
	useEffect(() => {
		videoRef.current?.resume()
		return () => {
			videoRef.current?.pause()
		}
	}, [])
	return (
		<View className="w-screen h-screen  bg-white items-center justify-center">
			<Video
				// Can be a URL or a local file.
				source={post.image}
				// Store reference
				ref={videoRef}
				// Callback when remote video is buffering
				onBuffer={(bfr) => {
					console.log('Buffern inpost card ', bfr)
				}}
				// Callback when video cannot be loaded
				onError={() => {}}
				// style={styles.backgroundVideo}
				style={{
					width: 500,
					height: 400,
				}}
				// controls
				repeat
				onTouchStart={togglePause}
			/>
		</View>
	)
}
const PostCard = ({ post }: { post: any }) => {
	const { toggleTheme } = useTheme()
	const { height, width } = Dimensions.get('window')
	const [isLiked, setIsLiked] = useState(false)
	const [showCommentModal, setShowCommentModal] = useState(false)
	const toggleLike = () => {
		setIsLiked(!isLiked)
	}
	return (
		<ThemedView
			className="items-center justify-center "
			style={{
				height,
				width,
			}}
		>
			{post?.type == 'video' ? (
				<VideoPlayerCard post={post} />
			) : (
				<Image source={post.image} className="w-full h-[100%]" />
			)}
			{/* caption */}
			<View className='absolute px-5 pb-20 bottom-0 bg-accent/20 w-screen'>
				<View className='flex-row items-end gap-3'>
					<View className="w-14 h-14 rounded-full border-2 border-accent">
						<Image
							source={post.image}
							className="w-full h-full rounded-full"
							resizeMode="contain"
						/>
					</View>
                    <Text className='text-2xl text-gray-500 font-bold'>Kassahun Melaku</Text>
				</View>
				<TouchableOpacity>
					<Text className='text-lg font-semibold text-gray-500'>
						this is the caption i have evere sended dihosfih dsoifo{' '}
					</Text>
				</TouchableOpacity>
			</View>
			<View className="absolute right-3 bottom-32 z-50 gap-8 items-center">
				<View>
					<AntDesign
						onPress={toggleLike}
						name="heart"
						size={40}
						color={isLiked ? '#FFD700' : '#FFF'}
					/>
					<Text className="text-xl font-semibold text-white">{isLiked ? 43 : 42}</Text>
				</View>
				<View>
					<Ionicons
						onPress={() => setShowCommentModal(true)}
						name="chatbubble-ellipses-sharp"
						size={40}
						color="#FFF"
					/>
					<Text className="text-xl font-semibold text-white">123</Text>
				</View>
				<View className="w-14 h-14 rounded-full border-2 border-accent">
					<Image
						source={post.image}
						className="w-full h-full rounded-full"
						resizeMode="contain"
					/>
				</View>
			</View>
			<Modal
				transparent
				visible={showCommentModal}
				onRequestClose={() => setShowCommentModal(false)}
				animationType="slide"
			>
				<Pressable
					className="flex-1 bg-black/40"
					onPress={() => setShowCommentModal(false)}
				/>
				<View className="bg-white absolute bottom-0 w-full h-1/2">
					<Text>Comments</Text>
				</View>
			</Modal>
		</ThemedView>
	)
}

export default PostCard
