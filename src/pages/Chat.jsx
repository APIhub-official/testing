import React, { useState, useRef, useEffect } from 'react';
import { useChat } from '../contexts/ChatContext';
import { useTheme } from '../contexts/ThemeContext';
import MessageBubble from '../components/MessageBubble';
import TypingIndicator from '../components/TypingIndicator';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const { messages, isTyping, sendMessage } = useChat();
  const { theme } = useTheme();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const message = inputValue.trim();
    setInputValue('');
    await sendMessage(message);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Messages area */}
      <div 
        className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-4"
        style={{ backgroundColor: theme.background }}
      >
        {messages.map((message, index) => (
          <MessageBubble 
            key={message.id} 
            message={message}
            isLast={index === messages.length - 1}
          />
        ))}
        
        {isTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div 
        className="border-t p-4"
        style={{ 
          backgroundColor: theme.surface,
          borderColor: theme.border
        }}
      >
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="w-full px-4 py-3 rounded-lg border resize-none transition-all duration-200 focus:outline-none focus:ring-2"
              style={{
                backgroundColor: theme.background,
                borderColor: theme.border,
                color: theme.text,
                focusRingColor: theme.primary
              }}
              onFocus={(e) => {
                e.target.style.borderColor = theme.primary;
                e.target.style.boxShadow = `0 0 0 2px ${theme.primary}20`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = theme.border;
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            style={{
              backgroundColor: theme.primary,
              color: theme.background
            }}
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;