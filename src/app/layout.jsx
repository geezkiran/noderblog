import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Spectral } from "next/font/google";
import { cn } from "@/lib/utils";

const spectral = Spectral({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-spectral',
});

export const metadata = {
  title: 'Noder',
  description: 'Light Speed Learning',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={cn(
        "font-sans",
        spectral.variable,
      )} 
      suppressHydrationWarning
    >
      <head>
      </head>
      <body>
        <main style={{ position: 'relative' }}>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
