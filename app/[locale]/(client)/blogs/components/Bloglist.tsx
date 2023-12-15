"use client";
import { useGetBlogsQuery } from "@/app/store/service/blog/blog.service";
import Image from "next/image";
import Link from "next/link";

export default function BlogList() {
  const { data: Blog, isFetching } = useGetBlogsQuery(
    {},
    { pollingInterval: 1000 }
  );
  if (!Blog) return null;
  console.log(Blog);
  return (
    <>
      {Blog.data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
        >
          <Image
            className="object-cover h-64 w-96"
            src={item.attributes.thumb.data.attributes.url}
            height={550}
            width={400}
            alt=""
          />
          <p
            className="bg-green-500 flex items-center leading-none text-sm font-medium text-gray-50 pt-1.5 pr-3 pb-1.5 pl-3
     rounded-full uppercase inline-block"
          >
            Entertainment
          </p>
          <a className="text-lg font-bold sm:text-xl md:text-2xl">
            <Link
              href={{
                pathname: `/blogs/${item.id}`,
                query: { name: `${item.attributes.title}` },
              }}
            >
              {item.attributes.title}
            </Link>
          </a>

          <p className="text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className="pt-2 pr-0 pb-0 pl-0">
            <a className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-0 underline">
              {item.attributes.author}
            </a>
            <p className="inline text-xs font-medium mt-0 mr-1 mb-0 ml-1">
              · {item.attributes.updatedAt}·
            </p>
            <p className="inline text-xs font-medium text-gray-300 mt-0 mr-1 mb-0 ml-1">
              5min . read
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
