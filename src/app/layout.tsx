import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ФеррумАвто | Главная',
  description: 'СТО твоей мечты',
  icons: '/svg/logo_ferrumauto.svg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
