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
import { useTheme } from '../../../context/themeContext'
import ThemedButton from '../../../components/ThemedButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import Video, { VideoRef } from 'react-native-video'
import { Feather } from '@expo/vector-icons'
import Comment from './Comment'
import { useNavigation } from '@react-navigation/native'
import { AppStackParams } from '../../../types/navigatorParams/AppStackParams'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

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

const PostCard = ({ item }: any) => {
	const [showFullCaption, setShowFullCaption] = useState(false)
	const [showComment, setShowComment] = useState(false)
	const navigation =
		useNavigation<NativeStackNavigationProp<AppStackParams>>()
	const { height: screenHeight } = Dimensions.get('window')
	const postHeight = screenHeight - 30
	return (
		<View
			className="relative w-full bg-black"
			style={{ height: postHeight }}
		>
			<Image
				source={{ uri: item.media }}
				className="absolute top-0 left-0 w-full h-full"
				resizeMode="cover"
			/>

			{/* Bottom overlay with caption and follow */}
			<View className="absolute bottom-3 w-full px-4 py-6 ">
				<View className="flex-row items-center justify-between mb-2">
					<View className="flex-row items-center space-x-3">
						<TouchableOpacity
							onPress={() => navigation.navigate('UserProfile')}
						>
							<Image
								source={{ uri: item.user.profilePic }}
								className="w-10 h-10 rounded-full"
							/>
							<Text className="text-white font-semibold text-lg">
								{item.user.name}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity className="bg-accent px-4 py-1 rounded-full">
							<Text className="text-[#555] font-medium text-sm">
								Follow
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<Text
						className="text-[#EEE] text-base max-w-[80%]"
						numberOfLines={showFullCaption ? 1000 : 2}
					>
						{item.caption} dkjlkksdhfosdjfjlsdkjfls djfsdjk dkjfojsd
						sadkjof ajsdokfs askdfjoska dsjfkas dkjfsa sakdjf
						asdjkosa kfdjgo fodkjogdkl djkfog sodkfj ksdds
					</Text>
					<TouchableOpacity
						onPress={() => setShowFullCaption(!showFullCaption)}
					>
						<Text className="text-accent font-semibold">
							Show {showFullCaption ? 'Less' : 'More'}
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			{/* Action buttons (bottom-right) */}
			<View className="absolute bottom-20 gap-8 right-4 items-center">
				<TouchableOpacity className="items-center">
					<TouchableOpacity
						onPress={() => navigation.navigate('UserProfile')}
					>
						<Image
							source={{ uri: item.user.profilePic }}
							className="w-14 h-14 rounded-full border-2 border-white"
						/>
						<View className="absolute bottom-0 right-0 bg-accent rounded-full p-[2px]">
							<Feather name="plus" size={14} color="#fff" />
						</View>
					</TouchableOpacity>
				</TouchableOpacity>

				<TouchableOpacity className="items-center">
					<AntDesign
						// onPress={toggleLike}
						name="heart"
						size={40}
						color="#FFF"
					/>
					<Text className="text-white text-sm">{item.likes}</Text>
				</TouchableOpacity>

				<TouchableOpacity className="items-center">
					<Ionicons
						onPress={() => setShowComment(true)}
						name="chatbubble-ellipses-sharp"
						size={40}
						color="#FFF"
					/>
					<Text className="text-white text-sm">{item.comments}</Text>
				</TouchableOpacity>
			</View>
			{showComment && (
				<Comment
					onClose={() => setShowComment(false)}
					visible={showComment}
				/>
			)}
		</View>
	)
}
export default PostCard
