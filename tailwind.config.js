/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Theme colors
    'bg-vintage-50', 'bg-vintage-100', 'bg-vintage-600', 'bg-vintage-700', 'bg-vintage-900',
    'bg-slate-50', 'bg-slate-100', 'bg-slate-600', 'bg-slate-700', 'bg-slate-900',
    'bg-green-50', 'bg-green-100', 'bg-green-600', 'bg-green-700', 'bg-green-900',
    'bg-orange-50', 'bg-orange-100', 'bg-orange-600', 'bg-orange-700', 'bg-orange-900',
    'bg-cyan-50', 'bg-cyan-100', 'bg-cyan-600', 'bg-cyan-700', 'bg-cyan-900',
    'bg-purple-50', 'bg-purple-100', 'bg-purple-600', 'bg-purple-700', 'bg-purple-900',
    'bg-sepia-50', 'bg-sepia-100', 'bg-sepia-500', 'bg-sepia-600',
    'bg-blue-50', 'bg-blue-100', 'bg-blue-500', 'bg-blue-600',
    'bg-emerald-50', 'bg-emerald-100', 'bg-emerald-500', 'bg-emerald-600',
    'bg-red-50', 'bg-red-100', 'bg-red-500', 'bg-red-600',
    'bg-teal-50', 'bg-teal-100', 'bg-teal-500', 'bg-teal-600',
    'bg-indigo-50', 'bg-indigo-100', 'bg-indigo-500', 'bg-indigo-600',
    'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-500', 'bg-yellow-600',
    // Text colors
    'text-vintage-600', 'text-vintage-700', 'text-vintage-900',
    'text-slate-600', 'text-slate-700', 'text-slate-900',
    'text-green-600', 'text-green-700', 'text-green-900',
    'text-orange-600', 'text-orange-700', 'text-orange-900',
    'text-cyan-600', 'text-cyan-700', 'text-cyan-900',
    'text-purple-600', 'text-purple-700', 'text-purple-900',
    'text-sepia-700', 'text-blue-600', 'text-emerald-600',
    'text-red-600', 'text-teal-600', 'text-indigo-600', 'text-yellow-600',
    // Hover colors
    'hover:bg-vintage-700', 'hover:bg-slate-700', 'hover:bg-green-700',
    'hover:bg-orange-700', 'hover:bg-cyan-700', 'hover:bg-purple-700',
    'hover:bg-sepia-200', 'hover:bg-blue-200', 'hover:bg-emerald-200',
    'hover:bg-red-200', 'hover:bg-teal-200', 'hover:bg-indigo-200', 'hover:bg-yellow-200',
    // Gradients
    'from-vintage-900', 'via-sepia-900', 'to-vintage-800',
    'from-slate-900', 'via-blue-900', 'to-slate-800',
    'from-green-900', 'via-emerald-900', 'to-green-800',
    'from-orange-900', 'via-red-900', 'to-orange-800',
    'from-cyan-900', 'via-teal-900', 'to-cyan-800',
    'from-purple-900', 'via-indigo-900', 'to-purple-800',
    'from-vintage-500', 'to-sepia-500',
    'from-slate-500', 'to-blue-500',
    'from-green-500', 'to-emerald-500',
    'from-orange-500', 'to-red-500',
    'from-cyan-500', 'to-teal-500',
    'from-purple-500', 'to-indigo-500'
  ],
  theme: {
    extend: {
      colors: {
        'vintage': {
          50: '#f9f7f4',
          100: '#e8e2d9',
          200: '#d7c8b8',
          300: '#c2a990',
          400: '#ab8c6e',
          500: '#967555',
          600: '#7d5f45',
          700: '#634a37',
          800: '#4a372a',
          900: '#32251c',
        },
        'sepia': {
          50: '#fcf9f6',
          100: '#f5e6d3',
          200: '#ebd0ae',
          300: '#deb584',
          400: '#d19659',
          500: '#c47d3a',
          600: '#a66530',
          700: '#854f27',
          800: '#633a1f',
          900: '#422616',
        }
      },
      fontFamily: {
        'vintage': ['Playfair Display', 'serif'],
        'handwritten': ['Dancing Script', 'cursive']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-ring': 'pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          'from': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          'to': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' }
        },
        slideUp: {
          'from': { transform: 'translateY(30px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        scaleIn: {
          'from': { transform: 'scale(0.9)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' }
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.33)' },
          '40%, 50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'scale(1.2)' }
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'orange' }
        }
      }
    },
  },
  plugins: [],
}