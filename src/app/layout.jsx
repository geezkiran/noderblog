import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Geist, Instrument_Sans, Sulphur_Point, Spectral, Archivo, Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";

const geistSans = Geist({ 
  subsets: ['latin'], 
  variable: '--font-geist-sans' 
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
});

const spectral = Spectral({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-spectral',
});

const instrumentSerif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-instrument-serif',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-instrument-sans',
});

const sulphurPoint = Sulphur_Point({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-sulphur-point',
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
        geistSans.variable, 
        archivo.variable,
        spectral.variable,
        instrumentSans.variable,
        sulphurPoint.variable,
        instrumentSerif.variable
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
