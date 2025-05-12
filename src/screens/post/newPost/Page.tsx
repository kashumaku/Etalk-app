import React, { useCallback, useState } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	ScrollView,
	Modal,
	Pressable,
} from 'react-native'
// import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native'
import Video from 'react-native-video'
import q from 'react-native-image-picker'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import FilePickerModal from '../../../components/FilePickerModal'
import { useTheme } from '../../../context/themeContext'
import ThemedTextInput from '../../../components/ThemedTextInput'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function NewPostScreen() {
	const [media, setMedia] = useState<any>(null)
	const [caption, setCaption] = useState('')
	const [showUploadOption, setShowUploadOption] = useState(false)
	const navigation = useNavigation()
	const { isDarkMode, theme } = useTheme()
	const pickMedia = async () => {
		try {
			// const result = await launchImageLibrary({ mediaType: 'mixed' });
			// if (!result.didCancel && result.assets?.length) {
			//   setMedia(result.assets[0]);
			// }
			console.log(q)
		} catch (err) {
			console.log('Error ', err)
		}
	}

	const handlePost = () => {
		console.log({ media, caption })
		navigation.goBack()
	}
	const toggleUploadOptions = useCallback(() => {
		setShowUploadOption(!showUploadOption)
	}, [showUploadOption])
	const handlePickFromCamera = () => {}
	const handlePickFromGallery = () => {}
	return (
		<ThemedView className="px-5 py-8 flex-1">
			<SafeAreaView>
				<ScrollView showsVerticalScrollIndicator={false}>
					<ThemedText className="text-3xl font-bold mb-6">
						New Post
					</ThemedText>

					<TouchableOpacity
						onPress={toggleUploadOptions}
						className="aspect-square w-full rounded-2xl items-center justify-center mb-6 border-2 border-dashed border-neutral-400 "
						style={{ backgroundColor: theme.gray }}
					>
						{media ? (
							media.type?.includes('video') ? (
								<Video
									source={{ uri: media.uri }}
									//   useNativeControls
									resizeMode="cover"
									className="w-full h-full"
									//   isLooping
								/>
							) : (
								<Image
									source={{ uri: media.uri }}
									className="w-full h-full"
									resizeMode="cover"
								/>
							)
						) : (
							<ThemedText className="text-neutral-500 dark:text-neutral-400">
								Tap to select image or video
							</ThemedText>
						)}
					</TouchableOpacity>

					<ThemedText className="text-sm text-neutral-700 dark:text-neutral-300 mb-1">
						Caption
					</ThemedText>
					<ThemedTextInput
						placeholder="What's on your mind?"
						value={caption}
						onChangeText={setCaption}
						multiline
						className="rounded-xl p-4 text-base h-28 mb-6"
					/>

					<TouchableOpacity
						onPress={handlePost}
						className="bg-accent dark:bg-blue-500 py-4 rounded-full items-center"
					>
						<ThemedText className="text-white text-lg font-semibold">
							Share
						</ThemedText>
					</TouchableOpacity>
					{showUploadOption && (
						<FilePickerModal
							visible={showUploadOption}
							onClose={() => setShowUploadOption(false)}
							onPickCamera={handlePickFromCamera}
							onPickGallery={handlePickFromGallery}
						/>
					)}
				</ScrollView>
			</SafeAreaView>
		</ThemedView>
	)
}
