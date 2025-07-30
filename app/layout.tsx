import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://coloringbooks-rho.vercel.app'),
  title: 'Premium Adult Coloring Books - Stress Relief & Mindfulness',
  description: 'High-quality adult coloring books with thick paper, single-sided pages. Perfect for stress relief, mindfulness, and creative relaxation. Free shipping available.',
  keywords: 'adult coloring book, mindfulness coloring, stress relief activity, premium coloring pages, relaxing art activity, single-sided coloring pages',
  openGraph: {
    title: 'Premium Adult Coloring Books - Stress Relief & Mindfulness',
    description: 'High-quality adult coloring books with thick paper, single-sided pages. Perfect for stress relief and mindfulness.',
    type: 'website',
    url: 'https://coloringbooks-rho.vercel.app',
    images: [
      {
        url: 'https://m.media-amazon.com/images/I/71JrG558TXL._SY466_.jpg',
        width: 466,
        height: 466,
        alt: 'Premium Adult Coloring Books',
      },
    ],
  },
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Facebook Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '1075884446480304'); fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=1075884446480304&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Facebook Pixel Code */}
      </head>
      <body className={`${inter.className} hero-gradient text-gray-800`}>
        {children}
        
        {/* Vercel Analytics */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
          }}
        />
        <script defer src="/_vercel/insights/script.js" />
      </body>
    </html>
  )
} 