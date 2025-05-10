import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'
import { useTheme } from '../../../../context/themeContext'
import ThemedButton from '../../../components/ThemedButton'
import { SafeAreaView } from 'react-native-safe-area-context'

const PostCard = ({ post }: { post: any }) => {
	const { toggleTheme } = useTheme()
    const {height,width} = Dimensions.get('window')
	return (
		<View
         className=" "
  style={{
    height,
    width
  }}
        >
            <Image source={post.image} className='w-full h-[90%]'/>
			{/* <ThemedText>{post.title}</ThemedText>
			<ThemedText>{post.content}</ThemedText> */}
            <View className='absolute right-3 bottom-5 bg-black z-50'>
                <Image source={post.image} className='w-12 h-1/2 rounded-full border border-golden'/>
                <Text>djj</Text>

            </View>
            
		</View>
	)
}

export default PostCard
