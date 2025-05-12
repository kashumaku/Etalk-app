import { View, Text, TextProps } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '../context/themeContext'
import { darkTheme, lightTheme } from '../theme/color'

const ThemedText: FC<TextProps> = (prop) => {
	const { isDarkMode } = useTheme()
	const theme = isDarkMode ? darkTheme : lightTheme
	return (
		<Text {...prop} style={[prop?.style, { color: theme.text }]}>
			{prop?.children}
		</Text>
	)
}

export default ThemedText
