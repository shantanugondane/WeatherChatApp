'use client';

import { useState } from 'react';

export default function ChatInput({ onSendMessage, isLoading, onClearChat }) {
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
      <div className="chat-input-actions">
        <button
          type="button"
          onClick={onClearChat}
          className="clear-chat-btn"
          style={{
            marginRight: '8px',
            padding: '0 16px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            background: '#fafafa',
            color: '#222',
            cursor: 'pointer',
            fontWeight: 500,
            height: '40px',
            alignSelf: 'flex-end'
          }}
        >
          Clear
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!message.trim() || isLoading}
          className={`chat-send-button${(!message.trim() || isLoading) ? ' chat-send-button--disabled' : ''}`}
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <img src="/Vector.svg" alt="Send" style={{ width: '15px', height: '15px', display: 'block' }} />
          )}
        </button>
      </div>
    </div>
  );
} 