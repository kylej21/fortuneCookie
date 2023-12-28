import '@radix-ui/themes/styles.css';
import './theme-config.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'],
variable: '--font-inter' 
})

import { Theme, ThemePanel } from '@radix-ui/themes';


export const metadata: Metadata = {
  title: "Fortune Cookie Creator",
  description: 'Fortune Cookie Fortune Generator Full Stack Web Application using Next.js, tailwind CSS, and typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable} >
      <Theme appearance="light" accentColor="teal" scaling="110%" >
          <NavBar/>
          <main className="p-5 bg-gradient-to-b from-orange-200 to-amber-100">
            {children}
          </main>
        </Theme>
        </body>
    </html>
  )
}
