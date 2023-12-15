import React, { Suspense } from "react";
import Footer from "@/app/ui/client/home/footer";
import { ProviderI8 } from "@/app/provider";
import FBmess from "@/app/ui/client/chatbot/facebookmsg";
import Navbar from "./component/navbar";
const ClientLayout = ({ params: { locale }, children }: { params: { locale: string }; children: React.ReactNode }) => {
  return (
    <>
    <ProviderI8 locale={locale}>
        <Navbar />
        {children}
        <FBmess />
        <Footer />
    </ProviderI8>
    </>
      
  );
};

export default ClientLayout;
