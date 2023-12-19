import React, { Suspense } from "react";

 
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  export async function generateMetadata({params }) {
    const {id} =params
    const product = await fetch(`https://back-end-next14.onrender.com/product/${id}`,{
    }).then((res) => res.json())
    return {
      title: product.title
    }
  }
   
const Layout = ({
    params: { id },
    children,
  }: {
    params: { id: string };
    children: React.ReactNode;
  }) => {
  return (
    <>
          {children}
    </>
  );
};

export default Layout;
