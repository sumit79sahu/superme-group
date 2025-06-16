import type { Metadata } from "next";
import '@ant-design/v5-patch-for-react-19';
import "./globals.css";
import { Manrope } from 'next/font/google'
// import { message } from "antd";



const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['200', '400', '600', '800'], 
})

export const metadata: Metadata = {
  title: "Superme Group",
  description: "Soft trims and NVH solutions for seamless rides",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

