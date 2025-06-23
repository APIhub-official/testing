import React, { createContext, useContext, useState, useCallback } from 'react';

const ChatContext = createContext();

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      timestamp: new Date(),
      avatar: '🤖'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = useCallback((message) => {
    const newMessage = {
      id: Date.now(),
      timestamp: new Date(),
      ...message
    };
    setMessages(prev => [...prev, newMessage]);
  }, []);

  const simulateBotResponse = useCallback(async (userMessage) => {
    setIsTyping(true);
    
    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
    
    const responses = [
      "That's an interesting question! Let me think about that for a moment.",
      "I understand what you're asking. Here's what I think...",
      "Great point! I'd be happy to help you with that.",
      "That's a fascinating topic. Let me share some insights.",
      "I see what you mean. Here's my perspective on that.",
      "Thanks for asking! I have some thoughts on this.",
      "That's a good question. Let me break it down for you.",
      "I appreciate you bringing this up. Here's what I know..."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    setIsTyping(false);
    addMessage({
      type: 'bot',
      content: randomResponse,
      avatar: '🤖'
    });
  }, [addMessage]);

  const sendMessage = useCallback(async (content) => {
    // Add user message
    addMessage({
      type: 'user',
      content,
      avatar: '👤'
    });

    // Simulate bot response
    await simulateBotResponse(content);
  }, [addMessage, simulateBotResponse]);

  return (
    <ChatContext.Provider value={{
      messages,
      isTyping,
      sendMessage,
      addMessage
    }}>
      {children}
    </ChatContext.Provider>
  );
};