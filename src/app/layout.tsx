import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/styles/globals.css";
import { ShadcnThemeProvider } from "@/providers/shadcn-theme-provider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Better performance",
  description: "Created by ElProfetaMohammed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased`}
        suppressHydrationWarning
      >
        <ShadcnThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ShadcnThemeProvider>
      </body>
    </html>
  );
}
