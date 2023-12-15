import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        secondary : '#A729F5',
        
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'light-pattern': "url('/pattern-background-desktop-light.svg')",
        'dark-pattern': "url('/pattern-background-desktop-dark.svg')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
        themes: [
          {dark: {
            "primary": "#A729F5",
            "primary-focus": "#A729F5",
            "primary-content": "#E2E8F0"
            
           
          }},

          {light: {
            "primary": "#A729F5",
            "primary-focus": "#A729F5",
            "primary-content": "#E2E8F0"
           
           
          }},
          
        ]
    }
}
export default config
