import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eleazar James Galope",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="jsLOZJnHOr9_rrlLgApHdY_sE38WdRZLFb0CDhHE32g" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
