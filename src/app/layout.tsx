import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSans = localFont({
  src: [
    {
      path: './fonts/static/NotoSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/static/NotoSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/static/NotoSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    }
  ]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={notoSans.className}
      >
        {children}
      </body>
    </html>
  );
}
