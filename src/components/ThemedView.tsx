import { View, Text, ViewProps } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '../../context/themeContext'
import { darkTheme, lightTheme } from '../constants/color'

const ThemedView: FC<ViewProps> = (prop) => {
    const {isDarkMode} = useTheme()
    const theme = isDarkMode?darkTheme:lightTheme
	return <View {...prop}
    style = {[prop?.style, {backgroundColor:theme.background}]}
    >{prop?.children}</View>
}

export default ThemedView
