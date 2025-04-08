import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tech-stack.seabeya.com'),
  title: 'Tech Stack',
  description: 'Personal IT Notes',
  keywords: ['tech-stack', 'docs', 'documentation', 'IT', 'tutorial', 'open-source', 'seabeya'],
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Tech Stack',
    description: 'Personal IT Notes',
    siteName: 'Tech Stack',
    images: [
      {
        url: '/icons/icon-96x96.png',
        alt: 'Tech Stack',
      },
    ],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
