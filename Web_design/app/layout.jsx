import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata = {
  title: 'Noder',
  description: 'Start L',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
