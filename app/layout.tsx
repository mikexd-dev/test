import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from './_providers/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hackathon Template',
  description: 'Custom Web3 Hackathon Template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
