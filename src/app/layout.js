import { Inter } from 'next/font/google'
import './globals.css';
import 'xp.css/dist/XP.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GayOS: A queer tech history',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "w-screen h-screen"}>{children}</body>
    </html>
  )
}
