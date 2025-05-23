import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from 'src/components/layout/Footer';
import Header from 'src/components/layout/Header';
import 'src/styles/globals.css';
import 'src/styles/main.css';

export const metadata: Metadata = {
  title: '서비스 도입 FAQ | 기아 비즈(Kia Biz) - 친환경 모빌리티 서비스',
  description:
    '기아 비즈는 기업을 위한 친환경 모빌리티 서비스로 차량부터 전용 App/Web까지 업무차량 토탈 솔루션을 제공합니다.',
};

const kiaSignature = localFont({
  src: [
    {
      path: '../../public/fonts/KiaSignatureFixRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/KiaSignatureFixBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-kia-signature',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${kiaSignature.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
