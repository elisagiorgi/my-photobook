import type { Metadata } from "next";
import "./globals.css";
import { PhotobookProvider } from "@/app/context/PhotobookContext";

export const metadata: Metadata = {
  title: "My Photo Book",
  description:
    "Crea il tuo fotolibro personalizzato con le tue foto preferite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <PhotobookProvider>{children}</PhotobookProvider>
      </body>
    </html>
  );
}
