import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Empathy Bridge - Building Understanding Through Gaza Stories',
  description: 'An interactive application to build empathy around the Gaza crisis through perspective-taking scenarios',
  keywords: ['empathy', 'Gaza', 'perspective-taking', 'education', 'humanitarian'],
  authors: [{ name: 'Empathy Bridge Team' }],
  openGraph: {
    title: 'Empathy Bridge - Building Understanding Through Gaza Stories',
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
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}