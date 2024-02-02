import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

import "./globals.css"
import { CssBaseline } from '@mui/material'
import { Notifications } from "./notifications"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <CssBaseline />
      <body className={roboto.className} suppressHydrationWarning>
        {children}
        <Notifications />
      </body>
    </html>
  )
}
