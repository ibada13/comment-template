import type { Metadata } from "next";
import localFont from "next/font/local";
import {Cairo} from 'next/font/google'
import "./globals.css";

const cairo = Cairo({subsets:['latin']})

export const metadata: Metadata = {
  title: "Comment template",
  description: "Comment template build with nextjs and tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cairo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
