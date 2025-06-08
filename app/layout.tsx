import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Renjun Dashboard',
    default: 'Renjun Dashboard',
  },
  description: `Renjun's portfolio`,
  metadataBase: new URL(
    'https://vercel.com/renjuns-projects/portfolio-nextjs-dashboard'
  ),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
