
import '../../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Michael Macharia - Software Developer",
  description: 'Passionate software developer from Nairobi, Kenya, specializing in full-stack development and AI/Machine Learning solutions.',
  keywords: 'software developer, full-stack developer, React, Next.js, Django, AI, Machine Learning, Nairobi, Kenya',
  authors: [{ name: 'Michael Macharia' }],
  creator: 'Michael Macharia',
  openGraph: {
    title: "Michael Macharia - Software Developer",
    description: 'Passionate software developer from Nairobi, Kenya, specializing in full-stack development and AI/Machine Learning solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Michael Macharia - Software Developer",
    description: 'Passionate software developer from Nairobi, Kenya, specializing in full-stack development and AI/Machine Learning solutions.',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}