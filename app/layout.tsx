import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

import "./globals.css"
import { CssBaseline } from '@mui/material'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={roboto.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
