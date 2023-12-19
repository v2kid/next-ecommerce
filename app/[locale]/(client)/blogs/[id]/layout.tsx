import { useGetBlogsQuery, useGetDetailBlogQuery } from "@/app/store/service/blog/blog.service";
import { Metadata, ResolvingMetadata } from "next";
import React, { Suspense } from "react";

 
type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
  export async function generateMetadata({params }) {
    // Fetch data on the server side and pass it as initialData
    const {id} =params
    const product = await fetch(`https://strapi-cms-600q.onrender.com/api/blogs/${id}?populate=*`,{
      headers : {
        'Authorization': 'Bearer ' + 'ef991b0cd4cd35c3deb9d1f9c969e56ee60a801cd492577b4d6b124b76522dc0a77ed7e4877ad580740173549df073e3ca40ab3be8c0069b18f8150081d7fd2678b3b867083d0602a6f1873e6a9e6c2de67c4fe6e1f15dd2f81fa202ae979e68d05df5d3a7bb4541a1ce7af5cd83f6fdffee42450d8670681609fbff8100b668',
      }
    }).then((res) => res.json())
  
    return {
      title: product.data.attributes.title
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
