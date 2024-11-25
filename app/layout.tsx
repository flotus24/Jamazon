import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

import "./globals.css"
import type { Metadata } from "next"
import { inter, interLight } from "@/public/Fonts/fonts"

export const metadata: Metadata = {
  title: "Jamazon",
  description: "Jamazon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${interLight.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
