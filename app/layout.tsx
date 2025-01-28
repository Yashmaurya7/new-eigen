import Navbar from '@/components/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
// import Provider from '@/components/Provider';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eigengram',
  description: 'We are an medicinal Ai company striving to solve diseases with the help of technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider> */}
          <div className="h-screen flex flex-col bg-black">
            {/* Navbar is fixed, so account for its height */}
            
            <Navbar />
            <main className="flex-grow ">{/* Account for navbar height */}
              {children}
            </main>
            
          </div>
          <Toaster />
        {/* </Provider> */}
      </body>
    </html>
  );
}
