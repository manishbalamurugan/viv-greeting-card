'use client'

import { useEffect, useState } from 'react'

// Premium editorial-quality images - artistic, dramatic, unique
const images = {
  // HERO - Dutch Masters Dark Floral (keep exact same)
  heroFloral: 'https://images.unsplash.com/photo-1549289524-06cf8837ace5?w=1920&auto=format&fit=crop',
  dutchMasters: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&auto=format&fit=crop',
  darkBotanical: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?w=1920&auto=format&fit=crop',
  
  // Renaissance/Classical Art - museum quality, dramatic
  renaissance: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=1920&auto=format&fit=crop',
  classicalArt: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1920&auto=format&fit=crop',
  museum: 'https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=1920&auto=format&fit=crop',
  artGallery: 'https://images.unsplash.com/photo-1577720643272-265f09367456?w=1920&auto=format&fit=crop',
  
  // Shanghai - dramatic night cityscape, artistic angles
  shanghai: 'https://images.unsplash.com/photo-1548919973-5cef591cdbc9?w=1920&auto=format&fit=crop',
  shanghaiNight: 'https://images.unsplash.com/photo-1545893835-abaa50cbe628?w=1920&auto=format&fit=crop',
  shanghaiSkyline: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=1920&auto=format&fit=crop',
  
  // Orlando/Florida - stunning tropical paradise, golden hour
  orlando: 'https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=1920&auto=format&fit=crop',
  florida: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&auto=format&fit=crop',
  floridaSunset: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&auto=format&fit=crop',
  floridaBeach: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1920&auto=format&fit=crop',
  
  // Dubai - architectural marvel, cinematic
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&auto=format&fit=crop',
  dubaiNight: 'https://images.unsplash.com/photo-1546412414-e1885259563a?w=1920&auto=format&fit=crop',
  dubaiDesert: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1920&auto=format&fit=crop',
  burjKhalifa: 'https://images.unsplash.com/photo-1583043529255-e80d5c3b61ac?w=1920&auto=format&fit=crop',
  
  // Antarctica - breathtaking ice landscapes (keep penguin as is per request)
  antarctica: 'https://images.unsplash.com/photo-1551415923-a2297c7fda79?w=1920&auto=format&fit=crop',
  antarcticaIce: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=1920&auto=format&fit=crop',
  antarcticaLandscape: 'https://images.unsplash.com/photo-1528474855169-57ba33b6c1e1?w=1920&auto=format&fit=crop',
  
  // Northern Lights - vivid, cinematic aurora shots
  aurora: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&auto=format&fit=crop',
  auroraGreen: 'https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=1920&auto=format&fit=crop',
  auroraIceland: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1920&auto=format&fit=crop',
  
  // Peru - dramatic Machu Picchu, misty mountains
  peru: 'https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=1920&auto=format&fit=crop',
  machuPicchu: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1920&auto=format&fit=crop',
  peruMountains: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&auto=format&fit=crop',
  
  // Dance/Ballet - artistic, dramatic lighting
  ballet: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1920&auto=format&fit=crop',
  dancer: 'https://images.unsplash.com/photo-1545959570-a94084071b5d?w=1920&auto=format&fit=crop',
  danceStudio: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=1920&auto=format&fit=crop',
  
  // Art/Design - creative, painterly, artistic process
  painting: 'https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?w=1920&auto=format&fit=crop',
  design: 'https://images.unsplash.com/photo-1558865869-c93f6f8482af?w=1920&auto=format&fit=crop',
  typography: 'https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?w=1920&auto=format&fit=crop',
  brushstrokes: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1920&auto=format&fit=crop',
  artSupplies: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&auto=format&fit=crop',
  colorPalette: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1920&auto=format&fit=crop',
  
  // Penguins - keep as is per request
  penguin: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=1600&auto=format&fit=crop',
  penguins: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=1600&auto=format&fit=crop',
  penguinCute: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=1600&auto=format&fit=crop',
  penguinFamily: 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?w=1600&auto=format&fit=crop',
  emperorPenguin: 'https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=1600&auto=format&fit=crop',
  
  // Flowers/Romance - lush, romantic, editorial
  flowers: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1920&auto=format&fit=crop',
  peonies: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&auto=format&fit=crop',
  roses: 'https://images.unsplash.com/photo-1518882605630-8eb559cc3757?w=1920&auto=format&fit=crop',
  gardenRoses: 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1920&auto=format&fit=crop',
  wildflowers: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=1920&auto=format&fit=crop',
  
  // Abstract art - vibrant, artistic
  abstract: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1920&auto=format&fit=crop',
  watercolor: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1920&auto=format&fit=crop',
  gradient: 'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1920&auto=format&fit=crop',
  
  // Night sky / stars - cinematic
  stars: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&auto=format&fit=crop',
  milkyway: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1920&auto=format&fit=crop',
  
  // California - iconic golden state
  california: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&auto=format&fit=crop',
  goldenGate: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1920&auto=format&fit=crop',
}

const chapters = [
  { id: 'muse', label: 'The Muse', numeral: 'I' },
  { id: 'wanderer', label: 'The Wanderer', numeral: 'II' },
  { id: 'dancer', label: 'The Dancer', numeral: 'III' },
  { id: 'visionary', label: 'The Visionary', numeral: 'IV' },
  { id: 'beloved', label: 'The Beloved', numeral: 'V' },
]

const poeticLines = [
  "You paint the world in colors others cannot see",
  "From frozen tundras to ancient ruins, your spirit knows no bounds",
  "In your eyes I see every aurora I've ever dreamed of",
  "Each step you take leaves art in its wake",
  "You are the adventure I never want to end",
  "My heart followed you across continents before my feet ever could",
  "In every sunset, I see your smile",
  "You are the masterpiece I will spend forever admiring",
]

const memories = [
  { title: "The Artist", description: "From Shanghai kindergarten to global designer" },
  { title: "The Explorer", description: "Antarctica, Peru, Northern Lights, and beyond" },
  { title: "UVA Days", description: "Where our story began, late nights and endless laughs" },
  { title: "DC Chapter", description: "A year of post-grad adventures together" },
]

export default function Home() {
  const [currentLine, setCurrentLine] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  // Chat state
  const [chatOpen, setChatOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; id: number }>>([])
  const [isTyping, setIsTyping] = useState(false)
  const [canSendHeart, setCanSendHeart] = useState(false)

  const loveLetterParts = [
    "Hey beautiful...",
    "I've been thinking about you.",
    "About how lucky I am to have you in my life.",
    "Remember UVA? Those late nights, the laughs, falling for you.",
    "Our year in DC together—every moment was an adventure.",
    "Your art, your passion, your spirit... you inspire me every single day.",
    "I love how you see the world differently. How you find beauty everywhere.",
    "I love your laugh. Your creativity. Your kindness.",
    "I'm so proud of you, and I can't wait to see you thrive in Dubai.",
    "You're not just my favorite person...",
    "You're my favorite everything. 💕",
  ]

  useEffect(() => {
    setIsLoaded(true)
    const lineInterval = setInterval(() => {
      setCurrentLine((prev: number) => (prev + 1) % poeticLines.length)
    }, 4000)
    
    const handleScroll = () => {
      const scrolled = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrolled / max)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearInterval(lineInterval)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const startChat = () => {
    if (chatOpen) return
    setChatOpen(true)
    setMessages([])
    setCanSendHeart(false)
    
    loveLetterParts.forEach((text, index) => {
      setTimeout(() => setIsTyping(true), index * 2200)
      setTimeout(() => {
        setIsTyping(false)
        setMessages(prev => [...prev, { text, isUser: false, id: index }])
        if (index === loveLetterParts.length - 1) {
          setTimeout(() => setCanSendHeart(true), 500)
        }
      }, index * 2200 + 1200)
    })
  }

  const sendHeart = () => {
    setMessages(prev => [...prev, { text: "I love you too ♥", isUser: true, id: prev.length }])
    setCanSendHeart(false)
    setTimeout(() => setIsTyping(true), 500)
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { text: "Happy Anniversary, my love. Forever and always. 🐧♥🐧", isUser: false, id: prev.length }])
    }, 2000)
  }

  const fetchNewAffirmation = async () => {
    setIsTyping(true)
    try {
      const response = await fetch('/api/affirmations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await response.json()
      if (data.message) {
        setTimeout(() => {
          setIsTyping(false)
          setMessages(prev => [...prev, { text: data.message, isUser: false, id: prev.length }])
        }, 1000)
      }
    } catch {
      setIsTyping(false)
      setMessages(prev => [...prev, { text: "Every moment with you is a gift I treasure.", isUser: false, id: prev.length }])
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-black/50">
        <div 
          className="h-full bg-gradient-to-r from-[var(--accent)] via-[var(--gold)] to-[var(--purple)] transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Fixed Header */}
      <header className="fixed top-1 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] rounded-xl flex items-center justify-center">
              <span className="text-white font-editorial text-lg italic">V</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] rounded-xl opacity-30 blur-sm -z-10" />
          </div>
          <div>
            <p className="text-white font-display text-sm tracking-[0.2em]">FOR VIVIKA</p>
            <p className="text-white/40 text-xs font-serif italic">An Anniversary Portrait</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {chapters.map((ch) => (
            <a key={ch.id} href={`#${ch.id}`} className="text-white/50 hover:text-white font-serif text-sm transition-colors duration-300">
              {ch.numeral}
            </a>
          ))}
        </nav>
        <a 
          href="#beloved" 
          className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-serif italic hover:bg-white hover:text-black transition-all duration-500 border border-white/20"
        >
          With Love
        </a>
      </header>

      {/* ==================== HERO: THE OVERTURE ==================== */}
      <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
        {/* DUTCH MASTERS DARK FLORAL BACKGROUND */}
        <div className="absolute inset-0">
          {/* Primary dark floral - the red one */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${images.heroFloral})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Overlay botanical layer */}
          <div 
            className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay"
            style={{
              backgroundImage: `url(${images.dutchMasters})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
          {/* Vignette */}
          <div className="absolute inset-0 bg-radial-gradient pointer-events-none" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
          }} />
        </div>
        
        {/* Artistic grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-20" />
        
        {/* Floating journey preview cards */}
        <div className="absolute top-28 left-6 lg:left-16 w-36 lg:w-48 aspect-[3/4] floating-card rounded-xl overflow-hidden animate-float opacity-80 hidden md:block shadow-2xl">
          <img src={images.antarctica} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-3 text-white/90 font-serif text-sm italic">Antarctica</p>
        </div>
        
        <div className="absolute top-40 right-8 lg:right-20 w-32 lg:w-44 aspect-[3/4] floating-card rounded-xl overflow-hidden animate-float-delayed opacity-80 hidden md:block shadow-2xl" style={{ animationDelay: '1s' }}>
          <img src={images.aurora} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-3 text-white/90 font-serif text-sm italic">Aurora</p>
        </div>
        
        <div className="absolute bottom-36 left-12 lg:left-24 w-28 lg:w-40 aspect-[3/4] floating-card rounded-xl overflow-hidden animate-float hidden md:block shadow-2xl" style={{ animationDelay: '2s' }}>
          <img src={images.machuPicchu} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-3 text-white/90 font-serif text-sm italic">Peru</p>
        </div>
        
        <div className="absolute bottom-32 right-16 lg:right-32 w-36 lg:w-52 aspect-[3/4] floating-card rounded-xl overflow-hidden animate-float-delayed hidden md:block shadow-2xl" style={{ animationDelay: '0.5s' }}>
          <img src={images.dubai} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <p className="absolute bottom-3 left-3 text-white/90 font-serif text-sm italic">Dubai</p>
        </div>

        {/* Central content */}
        <div className={`relative z-10 text-center max-w-5xl mx-auto px-6 pt-20 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Decorative frame */}
          <div className="relative inline-block">
            <div className="absolute -inset-16 border border-white/10 pointer-events-none" />
            <div className="absolute -inset-8 border border-white/5 pointer-events-none" />
            
            <p className="font-serif text-lg md:text-xl text-white/50 italic tracking-widest mb-6">A Portrait in Five Movements</p>
            
            <h1 className="font-editorial text-7xl md:text-9xl lg:text-[12rem] leading-[0.85] mb-4">
              <span className="text-white italic">The</span>
              <br />
              <span className="text-[var(--accent)] italic">Vivika</span>
              <br />
              <span className="text-white italic">Edition</span>
            </h1>
            
            <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto my-8" />
            
            <p className="font-serif text-xl text-white/60 italic mb-4">
              A celebration of art, adventure, and the extraordinary soul who makes my world complete.
            </p>
            
            <p className="font-display text-sm md:text-base tracking-[0.4em] text-white/40">
              ANNIVERSARY MMXXVI
            </p>
          </div>

          {/* Navigation - artsy pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-16">
            {chapters.map((chapter) => (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className="group relative font-serif text-sm text-white/40 hover:text-white transition-all duration-500 px-5 py-2"
              >
                <span className="relative z-10">{chapter.numeral}. {chapter.label}</span>
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-full transition-all duration-500" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <p className="font-serif text-xs text-white/30 tracking-widest">SCROLL TO BEGIN</p>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ==================== MARQUEE - Shopify Style ==================== */}
      <section className="relative py-6 bg-[var(--ink)] overflow-hidden border-y border-white/10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="font-display text-sm tracking-[0.3em] text-white/30">ARTIST</span>
              <span className="text-[var(--accent)]">✦</span>
              <span className="font-display text-sm tracking-[0.3em] text-white/30">EXPLORER</span>
              <span className="text-[var(--gold)]">✦</span>
              <span className="font-display text-sm tracking-[0.3em] text-white/30">DANCER</span>
              <span className="text-[var(--purple)]">✦</span>
              <span className="font-display text-sm tracking-[0.3em] text-white/30">DREAMER</span>
              <span className="text-[var(--accent)]">✦</span>
              <span className="font-display text-sm tracking-[0.3em] text-white/30">BELOVED</span>
              <span className="text-[var(--gold)]">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== INTRO TRANSITION ==================== */}
      <section className="relative py-32 px-6 bg-[var(--cream)] overflow-hidden">
        {/* Decorative corner elements */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-[var(--accent)]/20" />
        <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-[var(--accent)]/20" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-[var(--accent)]/20" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-[var(--accent)]/20" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="font-display text-xs tracking-[0.4em] text-[var(--accent)] mb-8">A CELEBRATION OF YOU</p>
          <p className="font-serif text-2xl md:text-3xl text-[var(--ink-light)] leading-relaxed">
            This is not just a website. It's a love letter. A gallery. A journey through the moments, 
            memories, and magic that make you, <span className="font-editorial italic text-[var(--accent)]">Vivika Parmar</span>, the most extraordinary person I know.
          </p>
        </div>
        
        {/* Memory cards */}
        <div className="max-w-6xl mx-auto mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {memories.map((item, i) => (
            <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--accent)]/10 hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] flex items-center justify-center">
                  <span className="font-display text-xs text-white">0{i + 1}</span>
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--accent)]/30 to-transparent" />
              </div>
              <h3 className="font-editorial text-2xl text-[var(--ink)] italic mb-3">{item.title}</h3>
              <p className="font-serif text-base text-[var(--ink-muted)] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats row - Shopify style */}
        <div className="max-w-4xl mx-auto mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '7+', label: 'Countries Explored' },
            { num: '∞', label: 'Creative Ideas' },
            { num: '4', label: 'Years in Orlando' },
            { num: '1', label: 'True Love' },
          ].map((stat, i) => (
            <div key={i} className="group">
              <p className="font-editorial text-5xl md:text-6xl text-[var(--ink)] italic mb-2 group-hover:text-[var(--accent)] transition-colors">{stat.num}</p>
              <p className="font-display text-xs tracking-widest text-[var(--ink-muted)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== I. THE MUSE (Artist) ==================== */}
      <section id="muse" className="relative">
        {/* Hero art image */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src={images.brushstrokes}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="font-editorial text-[10rem] lg:text-[16rem] text-white/10 leading-none block">I</span>
              <h2 className="font-editorial text-5xl lg:text-7xl text-white italic -mt-16">The Muse</h2>
              <p className="font-display text-xs tracking-[0.3em] text-[var(--accent)] mt-4">MOVEMENT ONE</p>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="bg-[#0a0a0a] py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="font-serif text-xl md:text-2xl text-white/60 leading-relaxed drop-cap">
                In a kindergarten classroom in Shanghai, a little girl picked up her first crayon. 
                She didn't know it then, but she was already becoming the artist the world would come to adore.
                That was you, Vivika. Even then, you saw the world differently.
              </p>
              <p className="font-serif text-xl text-white/50 leading-relaxed">
                Fast forward through years of growth—moving to California in 2011, discovering new cultures, 
                blending Eastern and Western aesthetics into something uniquely your own. Your designs aren't 
                just beautiful; they tell stories. They breathe. They inspire.
              </p>
              <p className="font-serif text-xl text-white/50 leading-relaxed">
                From unique typefaces to thoughtful brand identities, from digital illustrations to 
                physical installations—you don't just create art. You create experiences. You make 
                the invisible beautifully visible.
              </p>
              
              {/* Skills/tools */}
              <div className="flex flex-wrap gap-3 pt-6">
                {['Typography', 'Brand Design', 'Illustration', 'Adobe CC', 'UI/UX', 'Photography'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/50 font-serif text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Artistic image collage */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute top-0 right-0 w-72 h-96 floating-card rounded-2xl overflow-hidden rotate-3 shadow-2xl border border-white/10">
                <img src={images.typography} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-24 left-0 w-64 h-80 floating-card rounded-2xl overflow-hidden -rotate-6 shadow-2xl z-10 border border-white/10">
                <img src={images.design} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-12 w-56 h-72 floating-card rounded-2xl overflow-hidden rotate-2 shadow-2xl border border-white/10">
                <img src={images.painting} alt="" className="w-full h-full object-cover" />
              </div>
              {/* Decorative rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[var(--accent)]/10 rounded-full animate-rotate-slow" />
            </div>
          </div>
        </div>

        {/* Quote ribbon */}
        <div className="relative py-24 overflow-hidden">
          <img 
            src={images.gardenRoses}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <p className="font-editorial text-3xl md:text-5xl lg:text-6xl italic text-white leading-snug">
              "Each pixel of my life comes together to create my 
              <span className="text-[var(--accent)]"> multicultural </span> 
              and 
              <span className="text-[var(--gold)]"> multifaceted </span> 
              portrait"
            </p>
            <p className="font-serif text-lg text-white/40 italic mt-8">— Vivika Parmar</p>
          </div>
        </div>
        
        {/* Floral divider */}
        <div className="relative h-56 overflow-hidden">
          <img 
            src={images.roses}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        </div>
      </section>

      {/* ==================== II. THE WANDERER (Explorer) ==================== */}
      <section id="wanderer" className="relative">
        {/* Journey intro */}
        <div className="relative min-h-screen flex items-center overflow-hidden">
          <img 
            src={images.auroraGreen}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 grid-overlay opacity-20" />
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-32">
            <div className="text-center mb-20">
              <span className="font-editorial text-[10rem] lg:text-[16rem] text-white/5 leading-none block">II</span>
              <h2 className="font-editorial text-5xl lg:text-7xl text-white italic -mt-16">The Wanderer</h2>
              <p className="font-display text-xs tracking-[0.3em] text-[var(--teal)] mt-4">MOVEMENT TWO</p>
            </div>
            
            <p className="font-serif text-2xl md:text-3xl text-white/70 italic max-w-3xl mx-auto text-center mb-20">
              From the neon glow of Shanghai to the frozen silence of Antarctica, 
              your footprints tell the story of a soul that refuses to stand still.
            </p>
            
            {/* Journey timeline */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { img: images.shanghaiNight, place: 'Shanghai', year: 'Origins', desc: 'Where your story began—a city of lights and dreams', color: 'var(--accent)' },
                { img: images.california, place: 'California', year: '2011', desc: 'Golden state sunsets and new beginnings', color: 'var(--gold)' },
                { img: images.floridaBeach, place: 'Orlando', year: '4 Years', desc: 'Sun-kissed beaches and creative adventures', color: 'var(--accent)' },
                { img: images.antarctica, place: 'Antarctica', year: 'Dream Trip', desc: 'Dancing with penguins in a world of ice', color: 'var(--teal)' },
                { img: images.aurora, place: 'Northern Lights', year: 'Magic', desc: 'Chasing celestial fire across the sky', color: 'var(--purple)' },
                { img: images.machuPicchu, place: 'Peru', year: 'Adventure', desc: 'Among ancient clouds and Incan whispers', color: 'var(--gold)' },
              ].map((item, i) => (
                <div 
                  key={item.place}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
                >
                  <img 
                    src={item.img} 
                    alt="" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="font-display text-xs tracking-widest px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm" style={{ color: item.color }}>
                      {item.year}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-editorial text-3xl text-white italic mb-2">{item.place}</h3>
                    <p className="font-serif text-sm text-white/60 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Dubai feature - Next chapter */}
        <div className="relative py-32 px-6 overflow-hidden">
          <img 
            src={images.dubaiNight}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="max-w-xl">
              <p className="font-display text-xs tracking-[0.3em] text-[var(--gold)] mb-4">YOUR NEXT CHAPTER</p>
              <h3 className="font-editorial text-5xl md:text-7xl text-white italic mb-6">Dubai</h3>
              <p className="font-serif text-xl text-white/70 leading-relaxed mb-8">
                A city of gold and glass awaits you. I'm so incredibly proud of you for taking this leap.
                Even from afar, I'll be cheering you on every step of the way. Go fill the world 
                with your magic, Viv.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-[1px] bg-gradient-to-r from-[var(--gold)] to-transparent" />
                <p className="font-serif text-sm text-white/40 italic">I'll always be rooting for you</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transition quote */}
        <div className="bg-[var(--cream)] py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-editorial text-3xl md:text-4xl text-[var(--ink)] italic leading-relaxed">
              "Wherever your wandering heart takes you, mine will follow."
            </p>
          </div>
        </div>
      </section>

      {/* ==================== III. THE DANCER ==================== */}
      <section id="dancer" className="relative">
        {/* Dance hero */}
        <div className="relative min-h-screen flex items-center overflow-hidden">
          <img 
            src={images.dancer}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 grid-overlay opacity-20" />
          
          {/* Side art panel */}
          <div className="absolute left-0 top-0 bottom-0 w-1/3 hidden xl:block">
            <img src={images.ballet} alt="" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black" />
          </div>
          
          <div className="relative z-10 w-full">
            <div className="max-w-5xl mx-auto px-6 py-32 text-center lg:text-right lg:pl-32">
              <span className="font-editorial text-[10rem] lg:text-[16rem] text-white/5 leading-none block">III</span>
              <h2 className="font-editorial text-6xl lg:text-8xl text-white italic -mt-16 mb-6">The Dancer</h2>
              <p className="font-display text-xs tracking-[0.3em] text-[var(--accent)] mb-12">MOVEMENT THREE</p>
              
              <p className="font-serif text-2xl md:text-4xl text-white/80 italic leading-relaxed max-w-3xl ml-auto mb-12">
                You don't just dance—you become the music itself. 
                Every gesture a brushstroke, every step a poem, 
                every movement a love letter to life.
              </p>
              
              <p className="font-serif text-xl text-white/60 leading-relaxed max-w-2xl ml-auto">
                I've seen you move, and it's like watching poetry come alive. There's a grace in 
                everything you do—not just when you dance, but when you walk into a room, when 
                you laugh, when you create. You carry that rhythm with you everywhere.
              </p>
              
              {/* Decorative elements */}
              <div className="flex justify-center lg:justify-end gap-4 mt-16">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 rounded-full animate-float"
                    style={{ 
                      animationDelay: `${i * 0.15}s`,
                      background: `linear-gradient(135deg, var(--accent), var(--gold))`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Dance quote */}
        <div className="bg-[#0a0a0a] py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-editorial text-3xl md:text-4xl text-white/80 italic">
              "She dances through life, leaving beauty in her wake."
            </p>
          </div>
        </div>
      </section>

      {/* ==================== IV. THE VISIONARY (Dreamer) ==================== */}
      <section id="visionary" className="relative bg-[#0a0a0a]">
        <div className="min-h-screen py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-24">
              <span className="font-editorial text-[10rem] lg:text-[16rem] text-white/5 leading-none block">IV</span>
              <h2 className="font-editorial text-5xl lg:text-7xl text-white italic -mt-16">The Visionary</h2>
              <p className="font-display text-xs tracking-[0.3em] text-[var(--gold)] mt-4">MOVEMENT FOUR</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Image composition */}
              <div className="relative h-[600px]">
                <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden floating-card shadow-2xl">
                  <img src={images.museum} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden floating-card z-10 border-4 border-[#0a0a0a] shadow-2xl">
                  <img src={images.artGallery} alt="" className="w-full h-full object-cover" />
                </div>
                {/* Abstract decoration */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[var(--accent)]/30 rounded-full animate-rotate-slow" />
                <div className="absolute -top-6 -right-6 w-24 h-24 border border-[var(--gold)]/30 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
              </div>
              
              {/* Dreams & aspirations */}
              <div className="space-y-8">
                <p className="font-serif text-xl text-white/60 italic leading-relaxed">
                  Your dreams extend far beyond yourself. You want to inspire, to teach, to create 
                  awareness through art, to show the world that creativity isn't a gift for the few—
                  it lives in everyone, waiting to be awakened.
                </p>
                
                <p className="font-serif text-lg text-white/50 leading-relaxed">
                  I've watched you talk about your plans—the way your eyes light up when you imagine 
                  leading workshops, collaborating across cultures, making design accessible to those 
                  who never thought they could create. That passion is infectious.
                </p>
                
                <div className="space-y-4 pt-8">
                  <p className="font-display text-xs tracking-[0.3em] text-[var(--accent)] mb-6">YOUR VISION</p>
                  {[
                    'Lead creative workshops that spark imagination in others',
                    'Collaborate with communities and cultures across the globe',
                    'Create awareness through the transformative power of art',
                    'Inspire others to discover the artist within themselves',
                    'Build bridges between design and everyday people',
                    'Make the world a little more beautiful, every single day'
                  ].map((dream, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className="w-8 h-[1px] bg-gradient-to-r from-[var(--accent)] to-transparent group-hover:w-12 transition-all duration-500" />
                      <p className="font-serif text-lg text-white/50 group-hover:text-white/80 transition-colors">{dream}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floral transition to finale */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={images.heroFloral}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-editorial text-3xl md:text-4xl text-white/60 italic">And finally, a whisper from the heart...</p>
        </div>
      </div>

      {/* ==================== V. THE BELOVED (Penguins + Love) ==================== */}
      <section id="beloved" className="relative">
        {/* Penguin hero - Antarctica vibes */}
        <div className="relative min-h-screen flex items-center overflow-hidden">
          <img 
            src={images.penguins}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
          
          <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
            <span className="font-editorial text-[10rem] lg:text-[14rem] text-white/10 block">V</span>
            <div className="-mt-16 mb-12">
              <p className="font-display text-xs tracking-[0.3em] text-[var(--accent)] mb-2">MOVEMENT FIVE</p>
              <h2 className="font-editorial text-6xl lg:text-8xl text-white italic">The Beloved</h2>
            </div>
            
            {/* Rotating poetic lines */}
            <div className="min-h-[150px] flex items-center justify-center mb-16">
              <p 
                key={currentLine}
                className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-white/80 max-w-3xl animate-fade-in"
              >
                "{poeticLines[currentLine]}"
              </p>
            </div>
            
            {/* Penguin trail */}
            <div className="flex justify-center gap-8 mt-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="relative">
                  <img 
                    src={images.penguinCute} 
                    alt="" 
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/20 animate-float"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                </div>
              ))}
            </div>
            
            <p className="font-serif text-lg text-white/50 italic mt-12">
              (Yes, the penguins are for you. They always will be.)
            </p>
          </div>
        </div>

        {/* Love letter finale with floral backdrop */}
        <div className="relative py-32 px-6 overflow-hidden">
          {/* Floral background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[var(--cream)]" />
            <img 
              src={images.gardenRoses}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <img 
              src={images.peonies}
              alt=""
              className="absolute top-0 right-0 w-1/2 h-1/2 object-cover opacity-5"
            />
          </div>
          
          <div className="max-w-2xl mx-auto relative z-10">
            {/* Interactive Chat Love Letter */}
            <div className="bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl mb-20 overflow-hidden border border-[var(--accent)]/10">
              {/* Chat header */}
              <div className="bg-gradient-to-r from-[var(--ink)] to-[var(--ink-light)] px-6 py-4 flex items-center gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] flex items-center justify-center">
                    <span className="text-white font-editorial text-lg italic">♥</span>
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-display text-sm tracking-wider">Your Secret Admirer</p>
                  <p className="text-white/50 text-xs font-serif italic">
                    {isTyping ? 'typing...' : 'online'}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="text-white/60 text-sm">💌</span>
                </div>
              </div>
              
              {/* Chat body */}
              <div className="p-6 min-h-[450px] max-h-[550px] overflow-y-auto bg-gradient-to-b from-[var(--cream)]/30 to-white">
                {!chatOpen ? (
                  /* Closed state - invitation */
                  <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--gold)] flex items-center justify-center mb-8 animate-float shadow-lg">
                      <span className="text-4xl">💌</span>
                    </div>
                    <h3 className="font-editorial text-3xl md:text-4xl text-[var(--ink)] italic mb-4">
                      You Have a Message
                    </h3>
                    <p className="font-serif text-lg text-[var(--ink-muted)] italic mb-10 max-w-sm">
                      Someone has written you a love letter. Would you like to read it?
                    </p>
                    <button
                      onClick={startChat}
                      className="group relative bg-[var(--ink)] text-white px-12 py-5 rounded-full font-display text-sm tracking-widest hover:bg-[var(--accent)] transition-all duration-500 overflow-hidden shadow-lg"
                    >
                      <span className="relative z-10">OPEN MESSAGE</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </div>
                ) : (
                  /* Chat messages */
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div 
                        key={msg.id}
                        className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'} animate-fade-up`}
                      >
                        <div 
                          className={`max-w-[80%] px-5 py-3 rounded-2xl ${
                            msg.isUser 
                              ? 'bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] text-white rounded-br-md' 
                              : 'bg-white shadow-md border border-[var(--cream)] text-[var(--ink-light)] rounded-bl-md'
                          }`}
                        >
                          <p className="font-serif text-lg leading-relaxed">{msg.text}</p>
                        </div>
                      </div>
                    ))}
                    
                    {/* Typing indicator */}
                    {isTyping && (
                      <div className="flex justify-start animate-fade-in">
                        <div className="bg-white shadow-md border border-[var(--cream)] px-5 py-3 rounded-2xl rounded-bl-md">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-[var(--ink-muted)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-[var(--ink-muted)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-[var(--ink-muted)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              
              {/* Chat input area */}
              {chatOpen && (
                <div className="px-6 py-4 bg-white border-t border-[var(--cream)] flex items-center gap-3">
                  {canSendHeart ? (
                    <button
                      onClick={sendHeart}
                      className="flex-1 bg-gradient-to-r from-[var(--accent)] to-[var(--gold)] text-white py-4 px-6 rounded-full font-serif text-lg hover:shadow-lg transition-all duration-300 animate-fade-up"
                    >
                      Send ♥ Back
                    </button>
                  ) : messages.length > 0 && !isTyping && !canSendHeart ? (
                    <button
                      onClick={fetchNewAffirmation}
                      className="flex-1 bg-[var(--ink)] text-white py-3 px-6 rounded-full font-serif text-sm hover:bg-[var(--accent)] transition-all duration-300"
                    >
                      Get Another Love Note ✨
                    </button>
                  ) : (
                    <div className="flex-1 bg-[var(--cream)]/50 py-3 px-6 rounded-full">
                      <p className="text-[var(--ink-muted)] font-serif text-sm italic">
                        {isTyping ? 'Reading your message...' : 'Waiting...'}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Final love letter text */}
            <div className="text-center mb-16">
              <p className="font-serif text-xl md:text-2xl text-[var(--ink-light)] leading-relaxed drop-cap max-w-3xl mx-auto">
                From those first moments at UVA to our adventures in DC, through every laugh and late night—
                you've made my world infinitely brighter. And as you chase your dreams in Dubai, know that 
                my heart will always be with you, cheering you on from wherever I am.
              </p>
              <p className="font-serif text-xl md:text-2xl text-[var(--ink-light)] leading-relaxed max-w-3xl mx-auto mt-8">
                You are my favorite artist. My favorite explorer. My favorite dancer. My favorite dreamer. 
                You are my favorite everything. And I am so, so grateful to call you mine.
              </p>
            </div>
            
            {/* Grand finale card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--accent)] via-[var(--gold)] to-[var(--purple)] rounded-[2.5rem] opacity-20 blur-xl animate-pulse" />
              <div className="relative bg-[var(--ink)] text-white rounded-[2rem] p-12 md:p-20 text-center">
                <h3 className="font-editorial text-5xl md:text-7xl lg:text-8xl italic mb-6">
                  Happy Anniversary
                </h3>
                <p className="font-serif text-2xl md:text-3xl text-[var(--accent)] italic mb-10">
                  My Beautiful Vivika
                </p>
                
                {/* Penguin love */}
                <div className="flex justify-center items-center gap-6">
                  <img src={images.penguinCute} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent)]/50 animate-float shadow-lg" />
                  <span className="text-5xl animate-float" style={{ animationDelay: '0.2s' }}>♥</span>
                  <img src={images.penguinFamily} alt="" className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent)]/50 animate-float shadow-lg" style={{ animationDelay: '0.4s' }} />
                </div>
                
                <p className="font-serif text-base text-white/40 italic mt-12">
                  Forever and always, in every adventure, in every moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with floral accent */}
      <footer className="relative bg-black py-20 px-6 text-center border-t border-white/5 overflow-hidden">
        {/* Subtle floral overlay */}
        <img 
          src={images.heroFloral}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-5"
        />
        <div className="relative z-10">
          <p className="text-white/40 font-serif italic text-xl mb-6">
            Made with infinite love, for the one who makes my heart dance
          </p>
          <div className="flex justify-center items-center gap-4 text-white/20 mb-8">
            <span className="font-display text-xs tracking-widest">MMXXVI</span>
            <span>·</span>
            <span className="font-serif text-xs italic">Forever Yours</span>
          </div>
          <div className="flex justify-center gap-2">
            {['🐧', '♥', '🌍', '✨', '🎨'].map((emoji, i) => (
              <span key={i} className="text-2xl opacity-30">{emoji}</span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
