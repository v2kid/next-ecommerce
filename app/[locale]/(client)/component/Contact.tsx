'use client'
import { motion } from "framer-motion";
import { buttonVariant,buttonrightVariant } from "./motion";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useI18n } from "@/app/ui/locales/client";

export default function Contact(){
    const t =  useI18n(); 
    return(
        <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex justify-center items-center flex-col px-8 py-14 sm:flex-row lg:px-16" id="contactus">
            <motion.div variants={buttonVariant(0.5)} className="flex-1 mr-4">
                <h1 className="text-2xl font-bold sm:text-3xl overflow-hidden py-4 mb-8"><span className="text-[#40E0D0]">GET IN TOUCH</span> WITH OUR EXPERT</h1>
                <input className="bg-[#6de5d9] placeholder-white font-bold rounded-xl px-4 h-[40px] w-[100%]" placeholder="Name..."/>
                <input className="bg-[#6de5d9] placeholder-white font-bold rounded-xl px-4 h-[40px] my-8 w-[100%]" placeholder="Email..."/>
                <textarea className="bg-[#6de5d9] placeholder-white font-bold mb-10 rounded-xl px-4 w-[100%] py-4" placeholder="Message..."></textarea>
            </motion.div>
            <motion.div variants={buttonVariant(0.5)} className="flex-1 mr-4">
            <div className="flex flex-col text-[#F4F8EB]">
                <h1 className="text-3xl font-bold pb-14 text-[#40E0D0]">Contact Us</h1>
                <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <PhoneIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                <p className="text-base leading-7 text-dark-grey-600">
                {t('phone',{count :2})}
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  href="tel:+516-486-5135"
                >
                  +516-486-5135
                </a>
                <MapIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                <p className="text-base leading-7 text-dark-grey-600">
                {t('location',{count :2})}
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  target="_blank"
                  href="https://goo.gl/maps/QcWzYETAh4FS3KTD7"
                >
                  10924 Urna Convallis
                </a>
              </div>
            </div>
            </motion.div>
        </motion.div>
    )
}