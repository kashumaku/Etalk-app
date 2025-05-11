import { View, Text, TextInputProps, TextInput } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '../../context/themeContext'
import { darkTheme, lightTheme } from '../theme/color'

const ThemedTextInput:FC<TextInputProps> = (prop) => {
        const { isDarkMode } = useTheme()
        const theme = isDarkMode ? darkTheme : lightTheme
  return (
   <TextInput 
   
   {...prop} style={[prop?.style, { color: theme.text }]}
   placeholderTextColor={theme.text}
   />
  )
}

export default ThemedTextInput