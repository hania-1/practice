"use client";

// import dynamic from "next/dynamic";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

// Dynamically import Clerk components with SSR disabled
// const UserButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.UserButton), { ssr: false });
// const SignInButton = dynamic(() => import("@clerk/nextjs").then((mod) => mod.SignInButton), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Ensure UserButton and SignInButton are only rendered on the client */}
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
