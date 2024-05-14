import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Providers } from './lib/Providers';

export const metadata: Metadata = {
  title: 'yolog',
  description: 'record your trip',
};

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr" className={`${pretendard.variable}`}>
      <body className={`${pretendard.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
