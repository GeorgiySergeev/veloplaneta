import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body 
        className={montserrat.className}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Veloplaneta',
  description: 'Veloplaneta e-commerce store',
};