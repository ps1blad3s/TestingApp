import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Student Testing App",
  description: "Best app for student testing",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
