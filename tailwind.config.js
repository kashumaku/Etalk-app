/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors:{
            primary: "#1E3A8A", // Example color
            secondary: "#FBBF24", // Example color
            accent: "#3B82F6", // Example color
            background: "#F3F4F6", // Example color
            text: "#111827", // Example color
            muted: "#6B7280", // Example color
            error: "#EF4444", // Example color
            success: "#10B981", // Example color
            warning: "#F59E0B", // Example color
            info: "#3B82F6", // Example color
            light: "#F9FAFB", // Example color
            dark: "#111827", // Example color
            white: "#FFFFFF", // Example color
            black: "#000000", // Example color
       accent:'#FFD700', // Example color
        }
      },
      darkMode: 'class', // Enable dark mode
    },
    plugins: [],
  }