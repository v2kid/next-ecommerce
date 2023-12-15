import React, { Suspense } from "react";
import Footer from "@/app/ui/client/home/footer";
import { ProviderI8 } from "@/app/provider";
import FBmess from "@/app/ui/client/chatbot/facebookmsg";
import Navbar from "./component/navbar";
import { ThemeProvider } from "@/app/ui/theme/ThemeProvider";
const ClientLayout = ({
  params: { locale },
  children,
}: {
  params: { locale: string };
  children: React.ReactNode;
}) => {
  return (
    <>
      <ProviderI8 locale={locale}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <FBmess />
          <Footer />
        </ThemeProvider>
      </ProviderI8>
    </>
  );
};

export default ClientLayout;
