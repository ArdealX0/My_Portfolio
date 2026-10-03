import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata = {
  title: 'Anurag Aggarwal - Portfolio',
  description: 'Anurag Aggarwal, Mechatronics and AI engineering student at Western University and Software QA Analyst Intern at Health | Santé. Computer vision, robotics, automation, and data engineering. Seeking a summer 2027 internship.',
  icons: {
    icon: [
      { url: '/aa-logo.png', type: 'image/png' }
    ],
    shortcut: '/aa-logo.png',
    apple: '/aa-logo.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 0.5,
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, minimum-scale=0.5, user-scalable=yes" />
        <link rel="icon" href="/aa-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/aa-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/aa-logo.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}

