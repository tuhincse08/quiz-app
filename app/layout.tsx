import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Quiz Application related to Web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-light-pattern bg-slate-200  h-screen" }>
        <main className='container m-auto p-8'>
        {children}
        </main>
        </body>
    </html>
  )
}
