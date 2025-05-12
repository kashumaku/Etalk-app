import { View, Text, Modal, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedTextInput from '../../../components/ThemedTextInput'

const Comment = ({ visible, onClose }: { visible: boolean; onClose: any }) => {
	return (
		<Modal
			transparent
			visible={visible}
			onRequestClose={onClose}
			animationType="slide"
		>
			<Pressable className="flex-1 bgbl/50" onPress={onClose} />
			<ThemedView className="absolute bottom-0 w-full h-1/2 rounded-t-2xl p-5">
				<View className="border border-accent rounded-lg flex-row items-center">
					<ThemedTextInput
						placeholder="Write your comment..."
						className="flex-1"
					/>
					<TouchableOpacity>
						<Text>Submit</Text>
					</TouchableOpacity>
				</View>
			</ThemedView>
		</Modal>
	)
}

export default Comment
