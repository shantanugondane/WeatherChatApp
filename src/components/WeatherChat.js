'use client';

import { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

export default function WeatherChat() {
  const [threads, setThreads] = useState([
    { id: 1, name: 'Chat 1', messages: [] }
  ]);
  const [activeThreadId, setActiveThreadId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const activeThread = threads.find(t => t.id === activeThreadId);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeThread?.messages]);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
      timestamp: new Date().toISOString(),
    };
    setThreads(prev => prev.map(thread =>
      thread.id === activeThreadId
        ? { ...thread, messages: [...thread.messages, userMessage] }
        : thread
    ));
    setIsLoading(true);
    try {
      const response = await fetch('/api/weather', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: '',
        timestamp: new Date().toISOString(),
      };
      setThreads(prev => prev.map(thread =>
        thread.id === activeThreadId
          ? { ...thread, messages: [...thread.messages, assistantMessage] }
          : thread
      ));
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.choices && parsed.choices[0]?.delta?.content) {
                assistantMessage.content += parsed.choices[0].delta.content;
                setThreads(prev => prev.map(thread =>
                  thread.id === activeThreadId
                    ? {
                        ...thread,
                        messages: thread.messages.map(msg =>
                          msg.id === assistantMessage.id
                            ? { ...msg, content: assistantMessage.content }
                            : msg
                        )
                      }
                    : thread
                ));
              }
            } catch (e) { /* skip invalid JSON */ }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Sorry, I encountered an error while processing your request. Please try again.',
        timestamp: new Date().toISOString(),
        isError: true,
      };
      setThreads(prev => prev.map(thread =>
        thread.id === activeThreadId
          ? { ...thread, messages: [...thread.messages, errorMessage] }
          : thread
      ));
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setThreads(prev => prev.map(thread =>
      thread.id === activeThreadId
        ? { ...thread, messages: [] }
        : thread
    ));
  };

  const handleNewThread = () => {
    const newId = threads.length ? Math.max(...threads.map(t => t.id)) + 1 : 1;
    setThreads(prev => [
      ...prev,
      { id: newId, name: `Chat ${newId}`, messages: [] }
    ]);
    setActiveThreadId(newId);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <select
          value={activeThreadId}
          onChange={e => setActiveThreadId(Number(e.target.value))}
          className="chat-selector"
        >
          {threads.map(thread => (
            <option key={thread.id} value={thread.id}>{thread.name}</option>
          ))}
        </select>
        <button
          onClick={handleNewThread}
          className="new-chat-btn"
        >
          + New Chat
        </button>
      </div>
      <div className="chat-messages">
        {activeThread?.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isLoading && (
          <div className="loading-container">
            <div className="loading-avatar">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            </div>
            <div className="loading-dots">
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
              <div className="loading-dot"></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} onClearChat={handleClearChat} />
      </div>
    </div>
  );
} 