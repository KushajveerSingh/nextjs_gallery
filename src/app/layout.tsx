import '~/styles/globals.css';
import '@uploadthing/react/styles.css';

import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import TopNav from './_components/topnav';
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { extractRouterConfig } from 'uploadthing/server';
import { ourFileRouter } from './api/uploadthing/core';
import { Toaster } from '~/components/ui/sonner';
import { CSPostHogProvider } from './_analytics/providers';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Next.js Gallery App',
  description: '',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <CSPostHogProvider>
        <html lang='en'>
          <body className={`font-sans ${inter.variable} dark`}>
            <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
            <div className='grid h-screen grid-rows-[auto,1fr]'>
              <TopNav />
              <main className='overflow-y-scroll'>{children}</main>
            </div>
            {modal}
            <div id='modal-root' />
            <Toaster />
          </body>
        </html>
      </CSPostHogProvider>
    </ClerkProvider>
  );
}
