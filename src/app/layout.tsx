import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { YandexMetricaProvider } from 'next-yandex-metrica';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'АвтоФеррум | Главная',
  description: 'СТО твоей мечты',
  icons: '/svg/logo_ferrumauto.svg',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
           
              ym(95653342, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true
              });
              `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/95653342"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
