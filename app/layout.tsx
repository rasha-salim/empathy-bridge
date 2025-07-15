import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme'

export const metadata: Metadata = {
  title: 'Unboxing Empathy - Building Understanding Through Gaza Stories',
  description: 'An interactive application to build empathy around the Gaza crisis through perspective-taking scenarios',
  keywords: ['empathy', 'Gaza', 'perspective-taking', 'education', 'humanitarian'],
  authors: [{ name: 'Unboxing Empathy Team' }],
  icons: {
    icon: '/heart-icon.svg',
    shortcut: '/heart-icon.svg',
    apple: '/heart-icon.svg',
  },
  openGraph: {
    title: 'Unboxing Empathy - Building Understanding Through Gaza Stories',
    description: 'An interactive application to build empathy around the Gaza crisis through perspective-taking scenarios',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}