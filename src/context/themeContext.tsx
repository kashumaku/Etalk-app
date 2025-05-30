import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	useEffect,
} from 'react'
import { darkTheme, lightTheme } from '../theme/color'
type ThemeContextType = {
	isDarkMode: boolean
	toggleTheme: () => void
	theme: typeof darkTheme
}
const ThemeContext = createContext<ThemeContextType>({
	isDarkMode: false,
	toggleTheme: () => {},
	theme: lightTheme,
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	useEffect(() => {
		const loadTheme = async () => {
			const theme = await AsyncStorage.getItem('theme')
			setIsDarkMode(theme === 'dark')
		}
		loadTheme()
	}, [])
	const toggleTheme = async () => {
		setIsDarkMode((prevMode) => !prevMode)
		await AsyncStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
	}

	return (
		<ThemeContext.Provider
			value={{
				isDarkMode,
				toggleTheme,
				theme: isDarkMode ? darkTheme : lightTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => useContext(ThemeContext)
