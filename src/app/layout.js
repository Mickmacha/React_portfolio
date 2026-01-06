
import '../../styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Michael Kimani - ML/AI Engineer & Software Developer",
  description: 'Proactive AI/ML engineer and software developer from Nairobi, Kenya. Specializing in custom AI agents, full-stack development, machine learning, and Web3/Blockchain solutions.',
  keywords: 'ML engineer, AI engineer, software developer, full-stack developer, React, Next.js, Django, Flask, FastAPI, PyTorch, Machine Learning, AI, Blockchain, Web3, Nairobi, Kenya',
  authors: [{ name: 'Michael Kimani' }],
  creator: 'Michael Kimani',
  openGraph: {
    title: "Michael Kimani - ML/AI Engineer & Software Developer",
    description: 'Proactive AI/ML engineer and software developer from Nairobi, Kenya. Specializing in custom AI agents, full-stack development, machine learning, and Web3/Blockchain solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Michael Kimani - ML/AI Engineer & Software Developer",
    description: 'Proactive AI/ML engineer and software developer from Nairobi, Kenya. Specializing in custom AI agents, full-stack development, machine learning, and Web3/Blockchain solutions.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}