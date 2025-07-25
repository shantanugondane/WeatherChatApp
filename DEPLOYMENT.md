# Deployment Guide

## Vercel Deployment

### Step 1: Prepare Your Repository

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Weather Chat Interface"
```

2. Create a GitHub repository and push your code:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Next.js (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. Click "Deploy"

### Step 3: Environment Variables (if needed)

Currently, no environment variables are required as the API endpoint is hardcoded. If you need to change the API endpoint in the future:

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables:
   - `WEATHER_API_URL`: Your API endpoint
   - `API_KEY`: Your API key (if required)

### Step 4: Custom Domain (Optional)

1. In your Vercel dashboard, go to Settings → Domains
2. Add your custom domain
3. Configure DNS settings as instructed

## Manual Deployment

### Option 1: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Docker

1. Create a Dockerfile:
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. Build and run:
```bash
docker build -t weather-chat .
docker run -p 3000:3000 weather-chat
```

## Performance Optimization

The project is already optimized for production with:

- ✅ Next.js App Router
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Static generation where possible
- ✅ Proper caching headers
- ✅ Responsive design
- ✅ Minimal bundle size

## Monitoring

After deployment, monitor:

1. **Performance**: Use Vercel Analytics
2. **Errors**: Check Vercel Function Logs
3. **Uptime**: Monitor API endpoint availability
4. **User Experience**: Test on different devices

## Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check Node.js version (18+ required)
   - Ensure all dependencies are installed
   - Verify API endpoint is accessible

2. **Runtime Errors**:
   - Check Vercel Function Logs
   - Verify API response format
   - Test locally first

3. **CORS Issues**:
   - The API route is configured to handle CORS
   - Check if external API allows your domain

### Support

- Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
- Create issues in your repository for specific problems 