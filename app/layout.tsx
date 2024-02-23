import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
import { ClerkProvider } from '@clerk/nextjs'
export const metadata: Metadata = {
  title: 'Stateful AI Conversation Chatbot: Revolutionizing Digital Interactions',
  description: 'Dive into the realm of Stateful AI Conversation Chatbots, where each interaction matters. These chatbots remember past interactions, providing a continuous and context-aware conversational experience. They can recall previous queries, follow up on past recommendations, and provide personalized responses based on past conversations. This stateful capability is transforming digital communication, making it more engaging, personalized, and human-like.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
