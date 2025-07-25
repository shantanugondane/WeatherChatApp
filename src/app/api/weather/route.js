export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response(JSON.stringify({ error: 'Message is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Mock weather response for testing
    const mockWeatherResponse = generateMockWeatherResponse(message);
    
    // Simulate streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      start(controller) {
        const chunks = mockWeatherResponse.split(' ');
        let index = 0;
        
        const sendChunk = () => {
          if (index < chunks.length) {
            const chunk = chunks[index] + (index < chunks.length - 1 ? ' ' : '');
            const data = `data: ${JSON.stringify({
              choices: [{
                delta: { content: chunk }
              }]
            })}\n\n`;
            controller.enqueue(encoder.encode(data));
            index++;
            setTimeout(sendChunk, 100); // Simulate streaming delay
          } else {
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          }
        };
        
        sendChunk();
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Weather API error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to process weather request',
        details: error.message 
      }), 
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

function generateMockWeatherResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('new york')) {
    return "I'll check the weather in New York for you. The current temperature is 22°C (72°F) with partly cloudy conditions. Humidity is 65% and wind speed is 12 km/h from the northwest. The forecast for this weekend shows temperatures ranging from 18-25°C with a 30% chance of rain on Saturday. Sunday looks sunny and pleasant.";
  }
  
  if (lowerMessage.includes('london')) {
    return "Let me get the current weather for London. The temperature is currently 15°C (59°F) with overcast conditions. Humidity is 78% and there's a light drizzle. Wind speed is 8 km/h from the southwest. The weekend forecast shows temperatures around 12-18°C with scattered showers expected.";
  }
  
  if (lowerMessage.includes('tokyo')) {
    return "Checking the weather in Tokyo for you. The current temperature is 28°C (82°F) with sunny conditions. Humidity is 45% and wind speed is 5 km/h from the east. The weekend looks warm and clear with temperatures reaching 30°C on Saturday.";
  }
  
  if (lowerMessage.includes('paris')) {
    return "Here's the weather in Paris. The current temperature is 20°C (68°F) with partly sunny conditions. Humidity is 60% and wind speed is 10 km/h from the west. The weekend forecast shows pleasant weather with temperatures around 18-22°C.";
  }
  
  if (lowerMessage.includes('sydney')) {
    return "Let me check Sydney's weather. The current temperature is 24°C (75°F) with clear skies. Humidity is 55% and wind speed is 15 km/h from the southeast. The weekend looks great with sunny weather and temperatures around 22-26°C.";
  }
  
  // Default response for other cities
  return "I'd be happy to help you with weather information! However, I'm currently in demo mode and can provide weather details for New York, London, Tokyo, Paris, and Sydney. For other locations, you would need to connect to a real weather API service. The interface is working perfectly - you can see the streaming response and all the features are functional!";
} 