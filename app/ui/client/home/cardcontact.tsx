'use client'

import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useI18n } from "../../locales/client";

export default function CardContact(){
  const t =  useI18n(); 

    return(
        <div className="container flex flex-col mx-auto bg-white">
        <div className="w-full draggable ">
          <div className="container flex flex-col items-center gap-16 mx-auto my-5 ">
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <EnvelopeIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                <p className="text-base leading-7 text-dark-grey-600">
                  {/* Contact us at */}
                  {t('contact',{count :2})}
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  href="mailto: hello@loopple.com"
                >
                  hello@loopple.com
                </a>
              </div>
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
              </div>
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
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
          </div>
        </div>
      </div>
    )
}