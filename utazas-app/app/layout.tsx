import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Űrutazás App",
  description: "Next.js projekt :D",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body>
        <nav style={{padding: 20, background: "#111", color: "white"}}>
          <Link href="/" style={{marginRight: 15}}>Főoldal</Link>
          <Link href="/kuldetesek" style={{marginRight: 15}}>Küldetések</Link>
          <Link href="/kapcsolat">Kapcsolat</Link>
        </nav>
        <main style={{padding: 20}}>{children}</main>
      </body>
    </html>
  );
}