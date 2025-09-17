import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Nuvilab / Quimtia",
  description: "Produtos para animais de laboratório",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        {children}
      </body>
    </html>
  );
}
