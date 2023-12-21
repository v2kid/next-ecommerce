'use client'
import { motion } from "framer-motion";
import { buttonVariant, textVariant } from "./motion";
import Image from "next/image";

export default function Homebanner(){

    return(
        <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative" id="#">
            {/* <Navbar /> */}
            <img className="h-screen w-screen z-[-1] object-cover" src="/home-banner.jpeg" alt="Home-banner" />
           
            <div className="banner absolute top-[25%] left-[50%]">
                <motion.h1 variants={textVariant(1)} className="text-4xl font-bold py-3 text-[#40E0D0] lg:text-6xl">All My Techology</motion.h1>
            </div>
            <div className="bannerdescription  w-[100vw] text-white absolute top-[40%]">
                <div className="container xl:max-w-6xl mx-auto px-4 ">
                <motion.div  variants={buttonVariant(1)} className="flex flex-wrap flex-row -mx-4 text-center">
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" >
                <div className="py-8 px-12 mb-12 bg-gray-50 bg-opacity-0 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-slate-300 mb-4">
                    <a  target="_blank" href="https://back-end-next14.onrender.com/api">
                    <Image className=" z-10 h-[60px]" src="/nest-js-icon.png" height={100} width={100} alt="icon"/>
                    </a>
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-slate-300">Nest JS</h3>
                    <p className="text-gray-300">Back-End Nestjs</p>
                </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s" >
                <div className="py-8 px-12 mb-12 bg-gray-50  bg-opacity-0 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-gray-300 mb-4">
                    <Image className=" z-10 h-[60px]" src="/nextjs-icon.png" height={100} width={100} alt="icon"/>
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-slate-300">Front-End</h3>
                    <p className="text-gray-300">Nextjs 14 app router</p>
                </div>
            </div>
            <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s" >
                <div className="py-8 px-12 mb-12 bg-gray-50 bg-opacity-0 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <div className="inline-block text-gray-300 mb-4">
                    <Image className=" z-10 h-[60px]" src="/mongodb-icon.png" height={100} width={70} alt="icon"/>
                    </div>
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-slate-300">MongoDb</h3>
                    <p className="text-gray-300">Store database with Mongodb</p>
                </div>
            </div>
        </motion.div>
                    {/* <motion.h1 variants={textVariant(1.2)} className="text-2xl font-bold py-4 lg:text-4xl">we provide best guidance</motion.h1>
                    <motion.p variants={textVariant(1.4)} className="text-sm">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem</motion.p>
                    <motion.button variants={textVariant(1.6)} className="text-white bg-[#40E0D0] py-2 px-4 mt-2 text-sm font-bold rounded-[60px] hover:opacity-70 hover:duration-700">Read more</motion.button> */}
                </div>
            </div>
        </motion.div>
    )
}