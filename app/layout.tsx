import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { Providers } from './lib/Providers';
import { ToastContainer } from './components';

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
    <html
      lang="kr"
      className={`${pretendard.variable} flex flex-col items-center justify-center bg-primary100`}
    >
      <body
        className={`${pretendard.className} max-w-390pxr max-h-844pxr flex flex-col justify-end`}
      >
        <Providers>
          <ToastContainer />
          {children}
        </Providers>
        <div id="global-dialog"></div>
        <div id="global-toast"></div>
      </body>
    </html>
  );
}
