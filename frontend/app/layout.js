import Header from "@/components/Header";
import {
  ClerkProvider
} from '@clerk/nextjs';
import { neobrutalism } from "@clerk/themes";
import { Inter } from "next/font/google";
import "./globals.css";

const inter=Inter({subsets:["latin"]});

export const metadata = {
  title: "Servd - AI Recipes Platform",
  description: "",
};

export default function RootLayout({ children }) {
  return (

    < ClerkProvider appearance={{baseTheme: neobrutalism}}>
    
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
        >
        {/* Header  */}
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>

        <footer className="py-8 px-4 border-t">
          <div className="max-w-6xl mx-auto flex justify-center items-center">
            <p className="text-stone-500 text-sm">
              Made By Me
            </p>
          </div>
        </footer>
      </body>
    </html>
        </ClerkProvider>
  );
}
