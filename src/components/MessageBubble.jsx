import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const MessageBubble = ({ message, isLast }) => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const isBot = message.type === 'bot';

  useEffect(() => {
    if (isLast) {
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isLast]);

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <div 
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className={`flex items-end space-x-2 max-w-xs md:max-w-md lg:max-w-lg ${
        isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
      }`}>
        {/* Avatar */}
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
          style={{
            backgroundColor: isBot ? theme.primary : theme.accent,
            color: theme.background
          }}
        >
          {message.avatar}
        </div>

        {/* Message bubble */}
        <div className="flex flex-col">
          <div
            className={`px-4 py-2 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
              isBot 
                ? 'rounded-bl-sm' 
                : 'rounded-br-sm'
            }`}
            style={{
              backgroundColor: isBot ? theme.surface : theme.primary,
              color: isBot ? theme.text : theme.background,
              border: `1px solid ${theme.border}`
            }}
          >
            <p className="text-sm leading-relaxed whitespace-pre-wrap">
              {message.content}
            </p>
          </div>
          
          {/* Timestamp */}
          <div 
            className={`text-xs mt-1 px-2 ${
              isBot ? 'text-left' : 'text-right'
            }`}
            style={{ color: theme.textSecondary }}
          >
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;