import "@/styles/globals.css";
import { Inter } from '@next/font/google';


const inter =  Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap"
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`relative ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}
