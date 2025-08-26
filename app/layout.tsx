import type { Metadata } from "next";
import { Roboto_Serif} from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-roboto-serif",
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
    <html lang="en">
      <body
        className={`${robotoSerif.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
