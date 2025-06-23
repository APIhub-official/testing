import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { CheckIcon } from '@heroicons/react/24/solid';

const Themes = () => {
  const { theme, currentTheme, changeTheme, themes } = useTheme();

  return (
    <div 
      className="h-full p-6 overflow-y-auto custom-scrollbar"
      style={{ backgroundColor: theme.background }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 
          className="text-3xl font-bold mb-8"
          style={{ color: theme.text }}
        >
          Choose Your Theme
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(themes).map(([key, themeData]) => (
            <div
              key={key}
              className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                currentTheme === key ? 'ring-4' : ''
              }`}
              style={{
                backgroundColor: themeData.surface,
                borderColor: currentTheme === key ? themeData.primary : themeData.border,
                ringColor: currentTheme === key ? `${themeData.primary}40` : 'transparent'
              }}
              onClick={() => changeTheme(key)}
            >
              {/* Theme preview */}
              <div className="mb-4">
                <div 
                  className="h-20 rounded-lg mb-3 relative overflow-hidden"
                  style={{ backgroundColor: themeData.background }}
                >
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{ background: `linear-gradient(135deg, ${themeData.primary}, ${themeData.secondary})` }}
                  />
                  <div className="absolute bottom-2 left-2 right-2">
                    <div 
                      className="h-2 rounded mb-1"
                      style={{ backgroundColor: themeData.primary }}
                    />
                    <div 
                      className="h-2 rounded w-3/4"
                      style={{ backgroundColor: themeData.accent }}
                    />
                  </div>
                </div>
                
                {/* Color palette */}
                <div className="flex space-x-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: themeData.primary }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: themeData.secondary }}
                  />
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: themeData.accent }}
                  />
                </div>
              </div>

              {/* Theme name */}
              <h3 
                className="text-lg font-semibold mb-2"
                style={{ color: themeData.text }}
              >
                {themeData.name}
              </h3>

              {/* Selected indicator */}
              {currentTheme === key && (
                <div 
                  className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: themeData.primary }}
                >
                  <CheckIcon 
                    className="w-4 h-4"
                    style={{ color: themeData.background }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Current theme info */}
        <div 
          className="mt-8 p-6 rounded-xl border"
          style={{
            backgroundColor: theme.surface,
            borderColor: theme.border
          }}
        >
          <h2 
            className="text-xl font-semibold mb-4"
            style={{ color: theme.text }}
          >
            Current Theme: {theme.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p 
                className="text-sm font-medium mb-1"
                style={{ color: theme.textSecondary }}
              >
                Primary
              </p>
              <div 
                className="w-full h-8 rounded border"
                style={{ 
                  backgroundColor: theme.primary,
                  borderColor: theme.border
                }}
              />
            </div>
            <div>
              <p 
                className="text-sm font-medium mb-1"
                style={{ color: theme.textSecondary }}
              >
                Secondary
              </p>
              <div 
                className="w-full h-8 rounded border"
                style={{ 
                  backgroundColor: theme.secondary,
                  borderColor: theme.border
                }}
              />
            </div>
            <div>
              <p 
                className="text-sm font-medium mb-1"
                style={{ color: theme.textSecondary }}
              >
                Accent
              </p>
              <div 
                className="w-full h-8 rounded border"
                style={{ 
                  backgroundColor: theme.accent,
                  borderColor: theme.border
                }}
              />
            </div>
            <div>
              <p 
                className="text-sm font-medium mb-1"
                style={{ color: theme.textSecondary }}
              >
                Surface
              </p>
              <div 
                className="w-full h-8 rounded border"
                style={{ 
                  backgroundColor: theme.surface,
                  borderColor: theme.border
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Themes;