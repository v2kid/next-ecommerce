import { Providers } from "./store/provider";
import "./globals.css";
import { Toaster } from "sonner";
export const metadata = {
  title: "Admin Dashboard",
  description: "Next.js 14 Tutorial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <Providers>
          {children}
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  );
}
