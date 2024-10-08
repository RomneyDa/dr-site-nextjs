import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ui/theme-provider";

export const metadata: Metadata = {
  title: "Dallin Romney",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" className="dark no-scrollbar">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121621" />
        <meta name="msapplication-TileColor" content="#121621" />
        <meta name="theme-color" content="#121621" />
      </head>
      <body className="flex min-w-[375px]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
