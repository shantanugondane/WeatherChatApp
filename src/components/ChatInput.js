'use client';

import { useState } from 'react';

export default function ChatInput({ onSendMessage, isLoading }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="chat-input-bar">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Ask about the weather..."
        disabled={isLoading}
        className="chat-input-field"
      />
      
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!message.trim() || isLoading}
        className="chat-send-button"
      >
        {isLoading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="10.9091" fill="#0A0A0A"/>
            <path d="M15.4543 15.4546H24.5453M24.5453 15.4546V24.5455M24.5453 15.4546L15.4543 24.5455" stroke="#FAFAFA" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
} 