import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const TypingIndicator = () => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-start animate-fade-in">
      <div className="flex items-end space-x-2 max-w-xs">
        {/* Bot Avatar */}
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
          style={{
            backgroundColor: theme.primary,
            color: theme.background
          }}
        >
          🤖
        </div>

        {/* Typing bubble */}
        <div
          className="px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm"
          style={{
            backgroundColor: theme.surface,
            border: `1px solid ${theme.border}`
          }}
        >
          <div className="typing-dots">
            <div 
              className="typing-dot"
              style={{ backgroundColor: theme.textSecondary }}
            />
            <div 
              className="typing-dot"
              style={{ backgroundColor: theme.textSecondary }}
            />
            <div 
              className="typing-dot"
              style={{ backgroundColor: theme.textSecondary }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;