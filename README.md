# Weather Chat Interface

A responsive, production-ready weather chat interface built with Next.js, Tailwind CSS, and streaming API integration.

## Features

- 🌤️ **Real-time Weather Chat**: Ask questions about weather and get AI-powered responses
- 📱 **Responsive Design**: Mobile-first design with minimum width of 320px
- ⚡ **Streaming Responses**: Real-time token-by-token streaming from the API
- 🎨 **Clean UI**: Modern, clean interface with proper message alignment
- 🔄 **Auto-scroll**: Automatically scrolls to the latest message
- ⏱️ **Loading States**: Visual feedback during API calls
- 🕒 **Timestamps**: Each message includes a timestamp
- 🛡️ **Error Handling**: Graceful error handling for network issues
- ♿ **Accessibility**: Keyboard navigation and proper ARIA labels

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Language**: JavaScript (ES6+)
- **API**: Streaming weather agent API
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd weather-chat
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.js          # API route for weather requests
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Main page component
├── components/
│   ├── WeatherChat.js            # Main chat interface
│   ├── ChatMessage.js            # Individual message component
│   └── ChatInput.js              # Input component with send button
```

## API Integration

The app integrates with a weather agent API that provides streaming responses:

- **Endpoint**: `https://brief-thousands-sunset-9fcb1c78-485f-4967-ac04-2759a8fa1462.mastra.cloud/api/agents/weatherAgent/stream`
- **Method**: POST
- **Headers**: Includes required authentication and content-type headers
- **Body**: JSON payload with user message and configuration

## Key Features Explained

### 1. Streaming Responses

The app handles Server-Sent Events (SSE) to display responses in real-time as they're generated.

### 2. Responsive Design

- Mobile-first approach with minimum width of 320px
- Flexible layout that adapts to different screen sizes
- Touch-friendly interface elements

### 3. Message Handling

- User messages: Right-aligned with blue background
- Assistant messages: Left-aligned with gray background
- Error messages: Special styling for error states
- Timestamps: Displayed for each message

### 4. Loading States

- Disabled input during API calls
- Spinning loader in send button
- Typing indicator for assistant responses

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

No environment variables are required for this project as the API endpoint is hardcoded.

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

The project is already configured for Vercel deployment with:

- Next.js App Router support
- Proper build configuration
- Optimized for production

### Manual Deployment

1. Build the project:

```bash
npm run build
```

2. Start the production server:

```bash
npm start
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- Optimized for fast loading
- Minimal bundle size
- Efficient re-rendering with React
- Proper code splitting with Next.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues or questions, please open an issue in the repository.
