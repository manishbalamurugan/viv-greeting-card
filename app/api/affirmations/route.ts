import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const grokApiKey = process.env.GROK_API_KEY
    
    if (!grokApiKey) {
      // Beautiful, deeply personal love notes
      const loveNotes = [
        "The way your eyes light up when you create something new—that's when I fall in love with you all over again",
        "From the streets of Shanghai to the beaches of Orlando, every step of your journey has made you the incredible woman I adore",
        "Your art isn't just design—it's a window into the most beautiful soul I've ever known",
        "When you dance, the whole universe stops to watch. When you smile, it starts spinning again just for you",
        "Watching you chase the northern lights made me realize—you don't just find magic, you are magic",
        "The penguins in Antarctica were adorable, but nothing compares to the way you looked at them with such wonder",
        "From Machu Picchu's heights to Dubai's dreams, every adventure with you is my favorite story to tell",
        "Your heart for philanthropy and helping others is just one of a million reasons why you're extraordinary",
        "You carry Shanghai, Orlando, and soon Dubai within you—and somehow, you make each one feel like home",
        "Every dream you have, I want to help you chase. Every goal you set, I want to celebrate with you",
        "You don't just travel to places—you leave a piece of your beautiful spirit in each one",
        "The aurora borealis has nothing on the way your creativity lights up every room you enter",
      ]
      const randomNote = loveNotes[Math.floor(Math.random() * loveNotes.length)]
      return NextResponse.json({ message: randomNote })
    }

    const prompt = `Write a deeply romantic, heartfelt love note for Vivika Parmar. She is a freelance designer with an extraordinary soul who:

- Grew up in Shanghai at the American School, lived in Orlando for 4 years, and is moving to Dubai soon
- Is passionate about visual arts, patterns, typefaces, and design
- Loves dance and moves through life with grace
- Has a heart for philanthropy and creating awareness through art
- Has traveled to Antarctica (and saw penguins!), seen the Northern Lights, visited Peru and Machu Picchu
- Is incredibly adventurous and loves exploring the world
- Adores penguins (she finds them absolutely adorable!)
- Has a multicultural perspective that enriches everything she does

Write something that sounds like it comes from someone who is deeply, madly in love with her. Make it poetic, specific to who she is and her adventures, and emotionally moving. Keep it to 1-2 sentences. Be genuine, romantic, and celebrate her unique spirit.`

    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${grokApiKey}`,
      },
      body: JSON.stringify({
        model: 'grok-beta',
        messages: [
          {
            role: 'system',
            content: 'You are a deeply romantic, poetic writer who creates beautiful, personalized love letters. Your words should feel genuine, warm, and deeply personal—like they come from someone truly in love.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.9,
        max_tokens: 200,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    const data = await response.json()
    const message = data.choices?.[0]?.message?.content || 'You are the most beautiful chapter of my life story.'

    return NextResponse.json({ message })
  } catch (error) {
    console.error('Error:', error)
    
    const fallbackNotes = [
      "The way your eyes light up when you create something new—that's when I fall in love with you all over again",
      "From the streets of Shanghai to the beaches of Orlando, every step of your journey has made you the incredible woman I adore",
      "Your art isn't just design—it's a window into the most beautiful soul I've ever known",
      "When you dance, the whole universe stops to watch. When you smile, it starts spinning again just for you",
      "Watching you chase the northern lights made me realize—you don't just find magic, you are magic",
    ]
    const randomNote = fallbackNotes[Math.floor(Math.random() * fallbackNotes.length)]
    
    return NextResponse.json({ message: randomNote })
  }
}
