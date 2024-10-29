import Footer from "@/components/Footer";
import "./globals.css";
import { DM_Serif_Display, Red_Hat_Display } from "next/font/google";
import Navbar from "@/components/Navbar";

const serifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serifDisplay",
});
const redHatDisplay = Red_Hat_Display({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-redHatDisplay",
});

export const metadata = {
  title: "Harmony Farms",
  description: "Harmony Farms",
  icons: {
    icon: '/assets/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${serifDisplay.variable} ${redHatDisplay.variable} antialiased overflow-x-hidden`}
      >
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
