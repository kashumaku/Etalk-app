import {
	View,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native'
import React, { FC } from 'react'
import { darkTheme, lightTheme } from '../constants/color'
import { useTheme } from '../../context/themeContext'
import ThemedText from './ThemedText'
import ThemedView from './ThemedView'
interface ThemedButtonProps extends TouchableOpacityProps {
	title?: string
}
const ThemedButton: FC<ThemedButtonProps> = (prop) => {
	const { isDarkMode } = useTheme()
	const theme = isDarkMode ? darkTheme : lightTheme
	return (
		<TouchableOpacity
			{...prop}
			className={`${prop.className} bg-golden `}
			style={[prop?.style, { backgroundColor: theme.accent }]}
		>
			{prop?.children}
			<ThemedText>{prop?.title}</ThemedText>
		</TouchableOpacity>
	)
}

export default ThemedButton
