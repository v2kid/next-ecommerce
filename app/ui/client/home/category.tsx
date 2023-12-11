import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "@/app/ui/dashboard/sidebar/sidebar.module.css";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
  
  } from "react-icons/md";
import React, { useState } from "react";
    import Link from "next/link";


const menuItems = [
    {
      title: "Category",
      list: [
        {
          title: "Dashboard",
          path: "/home/hat",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />,
          },
          {
            title: "Users",
            path: "/dashboard/users",
            icon: <MdSupervisedUserCircle />,
          },
          {
            title: "Products",
            path: "/dashboard/products",
            icon: <MdShoppingBag />,
          },
          {
            title: "Transactions",
            path: "/dashboard/transactions",
            icon: <MdAttachMoney />,
          },
      ],
    },
  
  ];
const Category = () => {
    const [name, setName] = useState('')
  return (
    <div className="flex flex-col md-auto">
    <div className='border-s-4 items-center'>
        {menuItems.map((cat) => (
        <div key={cat.title}>
            <h1 className="items-center">{cat.title} : {name}</h1>
        {cat.list.map((item,index) => (
            <button key={index} onClick={()=>setName(item.title)} className='p-5 flex items-center gap-5 my-2 rounded-lg text-gray-700 hover:text-gray-950'>
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
        ))}
      </div>
  </div>
  );
};

export default Category;
