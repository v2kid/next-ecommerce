'use client'
import { useGetDetailBlogQuery } from "@/app/store/service/blog/blog.service";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function DetailBlog({params}){
  const { id } = params
  const {data : Detail} = useGetDetailBlogQuery(id)
  if(!Detail) return null
  console.log(id)
    return(
      <div  className="relative">
       <div className="w-full md:w-2/3 mx-auto">
            <div className="mx-5 my-3 text-sm">
            <a href="" className=" text-red-600 font-bold tracking-widest">author : {Detail.data.attributes.author}</a>
            <div className="w-full text-gray-600 font-thin italic px-5 pt-3">
               {Detail.data.attributes.updatedAt}
            </div>
            </div>
            <div className="w-full text-gray-800 text-4xl px-5 font-bold leading-none">
                {Detail.data.attributes.title}
            </div>
            
            <div className="w-full text-gray-500 px-5 pb-5 pt-2">
               The war of words comes after the governor sued the Atlanta mayor over her city’s mask mandate.
            </div>
            
            <div className="mx-5">
            <img className="object-cover w-max" src={Detail.data.attributes.mainimage.data.attributes.url} />
            </div>
            
            <div className="w-full text-gray-600 text-normal mx-5">
                <p className="border-b py-3">Georgia Gov. Brian Kemp speaks to the media during a press conference. | Kevin C. Cox/Getty Images</p>
            </div>
            
            
            
            <div className="px-5 w-full mx-auto">
            <BlocksRenderer content={Detail.data.attributes.content} />
            </div>
        </div>
      </div>
    )
}