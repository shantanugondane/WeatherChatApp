export default function ChatMessage({ message }) {
  const isUser = message.role === 'user';
  const timestamp = new Date(message.timestamp).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <div className={`message-container ${isUser ? 'message-user' : 'message-assistant'}`}>
      <div className={`message-bubble ${isUser ? 'user' : message.isError ? 'error' : 'assistant'}`}>
        <div className="whitespace-pre-wrap break-words">
          {isUser ? (
            message.content
          ) : (
            <span dangerouslySetInnerHTML={{ __html: message.content }} />
          )}
        </div>
        <div className="text-xs opacity-70 mt-2">
          {timestamp}
        </div>
      </div>
    </div>
  );
} 