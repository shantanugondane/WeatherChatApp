# Weather Chat Interface

🌤️ **Live Demo:** [https://weather-chat-app-beige.vercel.app/](https://weather-chat-app-beige.vercel.app/)

A responsive and production-ready Weather Chat Interface built with Next.js, featuring real-time streaming responses and a beautiful minimalist design.

## ✨ Features

- **Real-time Streaming**: Word-by-word AI responses for natural conversation flow
- **Responsive Design**: Mobile-first approach with clean, minimalist UI
- **Interactive Chat**: User messages (blue) and assistant responses (gray) with timestamps
- **Loading States**: Smooth loading indicators and disabled states during responses
- **Auto-scroll**: Automatically scrolls to the latest message
- **Error Handling**: Graceful error handling for network issues and invalid inputs
- **Custom Styling**: Beautiful minimalist design with custom send button icon

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd weather-chat
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
weather-chat/
├── src/
│   ├── app/
│   │   ├── api/weather/route.js    # API endpoint for weather queries
│   │   ├── globals.css             # Global styles and custom CSS
│   │   ├── layout.js               # Root layout component
│   │   └── page.js                 # Main page component
│   └── components/
│       ├── WeatherChat.js          # Main chat interface
│       ├── ChatMessage.js          # Individual message component
│       └── ChatInput.js            # Input field and send button
├── public/
│   └── Icon Button.svg             # Custom send button icon
├── README.md                       # This file
├── DEPLOYMENT.md                   # Deployment guide
└── vercel.json                     # Vercel configuration
```

## 🔧 API Integration

The app currently uses a mock API for demonstration. To connect to a real weather API:

1. **Update the API endpoint** in `src/app/api/weather/route.js`
2. **Configure your API credentials** in environment variables
3. **Replace the mock responses** with actual API calls

### Current Mock API Features:

- **Supported Cities**: New York, London, Tokyo, Paris, Sydney
- **Streaming Responses**: Simulated word-by-word streaming
- **Error Handling**: Comprehensive error management

## 🎨 Key Features Explained

### Streaming Responses

The app implements Server-Sent Events (SSE) for real-time streaming:

- Words appear gradually for natural conversation flow
- Loading indicators show while waiting for responses
- Smooth animations and transitions

### Responsive Design

- **Mobile-first**: Optimized for screens as small as 320px
- **Flexible layout**: Adapts to different screen sizes
- **Touch-friendly**: Large touch targets for mobile users

### Custom Styling

- **Minimalist design**: Clean, modern interface
- **Custom send button**: Black button with white arrow icon
- **Smooth animations**: Hover effects and transitions
- **Accessibility**: Proper focus states and keyboard navigation

## 📱 Mobile Testing

The app is fully responsive and optimized for mobile devices:

- Test on various screen sizes (320px minimum)
- Touch-friendly interface
- Optimized for mobile browsers

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Environment Variables

Create a `.env.local` file for local development:

```env
# Add your API keys here when connecting to real weather services
WEATHER_API_KEY=your_api_key_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed on [Vercel](https://vercel.com/)

---

**Live Demo:** [https://weather-chat-app-beige.vercel.app/](https://weather-chat-app-beige.vercel.app/)
