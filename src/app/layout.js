import { Inter } from 'next/font/google'
import './globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EVM Warfare',
  description: 'EVM Warfare website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={inter.className}><Providers>{children}</Providers></body>
    </html>
  )
}
