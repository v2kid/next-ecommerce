"use client";
import { useGetProductsQuery } from "@/app/store/service/product/product.service";
import { Fragment, useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import Skeletonlist from "../skeletons/skeleton1";
import Link from "next/link";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export default function ProductList() {
  const menuItems = [
    {
      title: "Category",
      list: [
        {
          title: "All",
          value: "All",
          icon: <MdDashboard />,
        },
        {
          title: "Shirt",
          value: "Shirt",
          icon: <MdDashboard />,
        },
        {
          title: "Pant",
          value: "Pant",
          icon: <MdDashboard />,
        },
        {
          title: "Shoes",
          value: "Shoes",
          icon: <MdDashboard />,
        },
      ],
    },
  ];
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("");
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const { data: products, isFetching } = useGetProductsQuery(
    { keyword, category, gender, page },
    { refetchOnMountOrArgChange: true ,}
  );
  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };
    const debouncedOnScroll = debounce(onScroll, 300);
    document.addEventListener("scroll", debouncedOnScroll);
    return function () {
      document.removeEventListener("scroll", debouncedOnScroll);
    };
  }, [page,isFetching]);
  if(!products) return null
 console.log('a')
  return (
    <>
      <div className="grid grid-cols-5 gap-4 bg-white">
        <div className="col-span-1">
          <div className="sticky top-20 bg-gray-50 p-4">
            {/* <Category /> */}
            <div className="flex flex-col right-0 md-auto pt-5">
              <div className="items-center ">
                {menuItems.map((cat) => (
                  <div key={cat.title}>
                    <FormControl 
                    className="text-gray-700 hover:text-gray-950"
                    >
                      <FormLabel id="demo-radio-buttons-group-label">
                        Gender
                      </FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="unisex"
                        name="radio-buttons-group"
                        onChange={(e) => {
                          setGender(e.target.value), setPage(1);
                        }}
                      >
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="male"
                          control={<Radio />}
                          label="Male"
                        />
                        <FormControlLabel
                          value="unisex"
                          control={<Radio />}
                          label="Unisex"
                        />
                      </RadioGroup>
                    </FormControl>
                    {cat.list.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCategory(item.value), setPage(1);
                        }}
                        className="p-5 flex items-center gap-5 my-2 rounded-lg text-gray-700 hover:text-gray-950"
                      >
                        {item.icon}
                        {item.title}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* search bar*/}
        <div className="col-span-4 ...">
          <div className="bg-gray-100">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl ">
              <div className="flex items-center pt-5">
                <div className="relative w-1/2">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder="Search branch name..."
                    required
                    value={keyword}
                    onChange={(e) => {
                      setKeyword(e.target.value), setPage(1);
                    }}
                  />
                </div>
              </div>

              <div className="mt-6 pb-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                  <Fragment key={product._id}>
                    <Link href={`/products/${product._id}`}>
                      <div className="overflow-hidden  aspect-video cursor-pointer rounded-xl relative group aspect-h-1 aspect-w-1 w-full  lg:aspect-none  lg:h-80">
                        <div className="absolute pl-2">
                          <p>{product.title}</p>
                        </div>
                        <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
                          <div>
                            <div className="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out">
                              <div className="font-bold text-zinc-900">
                                {product.price} $
                              </div>
                              <div className="opacity-40 text-sm ">
                                {product.description}
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          src={product.image[0]}
                          alt={product.image[0]}
                          className=" h-full w-full hover:scale-110 object-cover object-center lg:h-full lg:w-full group-hover:scale-110 transition duration-300 ease-in-out"
                          sizes=""
                        />
                      </div>
                    </Link>
                  </Fragment>
                ))}
                {isFetching && <Skeletonlist />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
