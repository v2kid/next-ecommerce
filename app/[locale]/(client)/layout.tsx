import React, { Suspense } from "react";
import ResponsiveAppBar from "@/app/ui/client/Appbar";
import Footer from "@/app/ui/client/home/footer";
import { ProviderI8 } from "@/app/provider";
import FBmess from "@/app/ui/client/chatbot/facebookmsg";
const ClientLayout = ({ params: { locale }, children }: { params: { locale: string }; children: React.ReactNode }) => {
  return (
    <>
    <ProviderI8 locale={locale}>
    <ResponsiveAppBar />
        {children}
        <FBmess />
        <Footer />
    </ProviderI8>
     
    </>
      
  );
};

export default ClientLayout;
