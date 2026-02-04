import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'For Vivika | An Anniversary Portrait',
  description: 'A Portrait in Five Movements—celebrating art, adventure, and the extraordinary soul who makes my world complete.',
  openGraph: {
    title: 'For Vivika | An Anniversary Portrait',
    description: 'A celebration of art, adventure, and love.',
    images: ['https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=90'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'For Vivika | An Anniversary Portrait',
    description: 'A celebration of art, adventure, and love.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💕</text></svg>" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
