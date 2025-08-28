import type { Metadata } from "next";
import { Roboto_Serif, Caveat, Cedarville_Cursive } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

const caveat = Caveat({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-caveat',
});

const cedarvilleCursive = Cedarville_Cursive({
  subsets: ['latin'],
  weight: '400', // Cedarville Cursive has only 400
  variable: '--font-cedarville-cursive',
});

export const metadata: Metadata = {
  title: "Education Adda",
  description: "Your one-stop platform to prepare for AMU, JMI, and BHU entrance exams. Join thousands of successful students with our expert-led courses.",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoSerif.variable} ${cedarvilleCursive.variable}`}>
      <body
        className="font-roboto-serif">
        {children}
      </body>
    </html>
  );
}
