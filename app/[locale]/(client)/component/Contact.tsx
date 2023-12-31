"use client";
import { motion } from "framer-motion";
import { buttonVariant, buttonrightVariant } from "./motion";
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { useI18n } from "@/app/ui/locales/client";
import { useState } from "react";
import { useAddContactMutation } from "@/app/store/service/product/product.service";
import { toast } from "sonner";
export default function Contact() {
  const t = useI18n();
  interface Contact {
    name: string;
    email: string;
    message: string;
    status: string;
  }
  const initialState: Contact = {
    name: "",
    email: "",
    message: "",
    status: "pending",
  };
  const [formcontact, setFormcontact] = useState(initialState);
  const [addContact, addContactResult] = useAddContactMutation();
  const handlesubmit = async () => {
    try {
      await addContact(formcontact);
      toast.success("we recived");
    } catch (error) {
      toast.warning(error);
    }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex justify-center items-center flex-col px-8 py-14 sm:flex-row lg:px-16"
      id="contactus"
    >
      <motion.div variants={buttonVariant(0.5)} className="flex-1 mr-4">
        <h1 className="text-2xl font-bold sm:text-3xl overflow-hidden py-4 mb-8">
          <span className="text-[#40E0D0]">GET IN TOUCH</span> WITH OUR EXPERT
        </h1>
        <input
          className="bg-slate-400 placeholder-white font-bold rounded-xl px-4 h-[40px] w-[100%]"
          value={formcontact.name}
          onChange={(event) =>
            setFormcontact((prev) => ({ ...prev, name: event.target.value }))
          }
          placeholder="Name..."
        />
        <input
          className="bg-slate-400 placeholder-white font-bold rounded-xl px-4 h-[40px] my-8 w-[100%]"
          value={formcontact.email}
          onChange={(event) =>
            setFormcontact((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Email..."
        />
        <textarea
          className="bg-slate-400 placeholder-white font-bold mb-10 rounded-xl px-4 w-[100%] py-4"
          value={formcontact.message}
          onChange={(event) =>
            setFormcontact((prev) => ({ ...prev, message: event.target.value }))
          }
          placeholder="Message..."
        ></textarea>
        <button
          onClick={handlesubmit}
          className="bg-blue-200 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded"
        >
          submit
        </button>
      </motion.div>
      <motion.div variants={buttonVariant(0.5)} className="flex-1 mr-4">
        <div className="flex flex-col text-[#F4F8EB]">
          <h1 className="text-3xl font-bold pb-14 text-[#40E0D0]">
            Contact Us
          </h1>
          <div className="flex flex-col items-center gap-3 px-8 py-10 bg-dark-600 rounded-3xl shadow-main text-slate-500">
            <PhoneIcon className="h-6 w-6 text-600 group-hover:text-indigo-800" />
            <p className="text-slate-500 leading-7 text-dark-grey-600">
              {t("phone", { count: 2 })}
            </p>
            <a
              className="text-lg font-bold text-purple-blue-500"
              href="tel:+516-486-5135"
            >
              +516-486-5135
            </a>
            <MapIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
            <p className="text-base leading-7 text-dark-grey-600">
              {t("location", { count: 2 })}
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
  );
}
