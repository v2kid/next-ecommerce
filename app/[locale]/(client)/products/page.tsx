import { useGetProductsQuery } from "@/app/store/service/product/product.service";
import Banner from "@/app/ui/client/home/banner";
import { useI18n } from "@/app/ui/locales/client";
import Image from "next/image";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import Skeletonlist from "@/app/ui/client/skeletons/skeleton1";
import ProductList from "@/app/ui/client/product/productlist";
export default function ProductPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
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
  // const [page, setPage] = useState(1);
  // const [gender, setGender] = useState("");
  // const [keyword, setKeyword] = useState("");
  // const [category, setCategory] = useState("");
  // const {
  //   data: products,
  //   isFetching,
  // } = useGetProductsQuery(
  //   { keyword, category, gender, page },
  //   { refetchOnMountOrArgChange: true },
  // );
  // const t = useI18n();
  // useEffect(() => {
  //   const onScroll = () => {
  //     const scrolledToBottom =
  //       window.innerHeight + window.scrollY >= document.body.offsetHeight - 300;
  //     if (scrolledToBottom && !isFetching) {
  //       console.log("Fetching more data...");
  //       setPage(page + 1);
  //     }
  //   };
  //   document.addEventListener("scroll", onScroll);
  //   return function () {
  //     document.removeEventListener("scroll", onScroll);
  //   };
  // }, [page, isFetching]);
  // if (!products) {
  //   return null;
  // }
  const features = [
    { name: "Origin", description: "Designed by Good Goods, Inc." },
    {
      name: "Material",
      description:
        "Solid walnut base with rare earth magnets and powder coated steel card cover",
    },
    { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
    {
      name: "Finish",
      description: "Hand sanded and finished with natural oil",
    },
    { name: "Includes", description: "Wood card tray and 3 refill packs" },
    {
      name: "Considerations",
      description:
        "Made from natural materials. Grain and color vary with each item.",
    },
  ];

  return (
    <>
      <div>
        {/* <Banner /> */}
        <div className="bg-white">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Technical Specifications
              </h2>
              <p className="mt-4 text-gray-500">
                The walnut wood card tray is precision milled to perfectly fit a
                stack of Focus cards. The powder coated steel divider separates
                active cards from new ones, or can be used to archive important
                task lists.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <Image
                width={250}
                height={250}
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                className="rounded-lg bg-gray-100"
              />
              <Image
                width={250}
                height={250}
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                className="rounded-lg bg-gray-100"
              />
              <Image
                width={250}
                height={250}
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
                className="rounded-lg bg-gray-100"
              />
              <Image
                width={250}
                height={250}
                src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-5 gap-4 bg-white">
        <div className=" flex flex-row justify-center bg-gray-50">
          <div className="flex flex-col md-auto pt-5">
            <div className="items-center">
              {menuItems.map((cat) => (
                <div key={cat.title}>
                  <FormControl>
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
                    <Link href={`/home/${product._id}`}>
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
      </div> */}
      <ProductList />
    </>
  );
}
