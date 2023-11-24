import 'cross-fetch/polyfill'; // Import the polyfill to provide Headers globally

import type { Metadata } from 'next';
import './globals.css';
import { peyda } from './ui/Fonts/Fonts';
import Head from 'next/head';
import RecoilContextProvider from './recoilContextProvider';
import QueryContextProvider from './querycontextprovider';

export const metadata: Metadata = {
  title: 'MetaNext',
  description: 'Test Project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="text-[12px] lg:text-[20px] 2xl:text-[28px]" lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`${peyda.className}`}>
        {/* Wrap the components with both Recoil and Query providers */}
        <RecoilContextProvider>
          <QueryContextProvider>{children}</QueryContextProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
