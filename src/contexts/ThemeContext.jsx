import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const themes = {
  neonGreen: {
    name: 'Neon Green',
    primary: '#00ff88',
    secondary: '#00cc6a',
    background: '#0a0f0a',
    surface: '#1a2f1a',
    surfaceHover: '#2a4f2a',
    text: '#ffffff',
    textSecondary: '#cccccc',
    accent: '#00ff88',
    border: '#2a4f2a',
    gradient: 'from-green-900 via-emerald-900 to-green-800'
  },
  midnightBlue: {
    name: 'Midnight Blue',
    primary: '#4f46e5',
    secondary: '#3730a3',
    background: '#0f0f23',
    surface: '#1e1e3f',
    surfaceHover: '#2e2e5f',
    text: '#ffffff',
    textSecondary: '#cccccc',
    accent: '#6366f1',
    border: '#2e2e5f',
    gradient: 'from-indigo-900 via-purple-900 to-indigo-800'
  },
  classicWhite: {
    name: 'Classic White',
    primary: '#2563eb',
    secondary: '#1d4ed8',
    background: '#ffffff',
    surface: '#f8fafc',
    surfaceHover: '#f1f5f9',
    text: '#1e293b',
    textSecondary: '#64748b',
    accent: '#3b82f6',
    border: '#e2e8f0',
    gradient: 'from-blue-50 via-indigo-50 to-blue-100'
  },
  crimsonRed: {
    name: 'Crimson Red',
    primary: '#dc2626',
    secondary: '#b91c1c',
    background: '#1a0606',
    surface: '#2d1010',
    surfaceHover: '#3d1a1a',
    text: '#ffffff',
    textSecondary: '#cccccc',
    accent: '#ef4444',
    border: '#3d1a1a',
    gradient: 'from-red-900 via-rose-900 to-red-800'
  },
  purpleHaze: {
    name: 'Purple Haze',
    primary: '#9333ea',
    secondary: '#7c3aed',
    background: '#1a0a1a',
    surface: '#2d1a2d',
    surfaceHover: '#3d2a3d',
    text: '#ffffff',
    textSecondary: '#cccccc',
    accent: '#a855f7',
    border: '#3d2a3d',
    gradient: 'from-purple-900 via-violet-900 to-purple-800'
  }
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('neonGreen');

  useEffect(() => {
    const savedTheme = localStorage.getItem('chatAppTheme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('chatAppTheme', themeName);
    }
  };

  const theme = themes[currentTheme];

  // Apply CSS variables to document root
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      if (key !== 'name') {
        root.style.setProperty(`--color-${key}`, value);
      }
    });
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};