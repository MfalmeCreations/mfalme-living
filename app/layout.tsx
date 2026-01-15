import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en" suppressHydrationWarning>
  <body className="bg-white text-gray-900">

        <header className="border-b">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Mfalme Living
            </Link>

            <div className="flex gap-6">
              <Link href="/properties">Properties</Link>
              <Link href="/experiences">Experiences</Link>
              <Link href="/about">About</Link>
              <a
                href="https://wa.me/254737523723"
                className="font-semibold text-green-600"
              >
                Book Now
              </a>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
