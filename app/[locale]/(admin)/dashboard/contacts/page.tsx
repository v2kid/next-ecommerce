'use client'
import Image from "next/image";
import styles from "@/app/ui/dashboard/transactions/transactions.module.css";
import React from "react";
import { useGetContactsQuery } from "@/app/store/service/product/product.service";
export default function ContactPage(){
  const {data } = useGetContactsQuery({})
if(!data) return null
    return(
        <div className={styles.container}>
      <h2 className={styles.title}>User Contacts</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Email</td>
            <td>Date</td>
          </tr>
        </thead>
 <tbody>

        {data.map((item,index)=>(
 <tr key={index}>
   <td>
     <div className={styles.user}>
       <Image
         src="/noavatar.png"
         alt=""
         width={40}
         height={40}
         className={styles.userImage}
       />
      {item.name}
     </div>
   </td>
   <td>
     <span className={`${styles.status} ${styles[item.status]}`}>
       {item.status}
     </span>
   </td>
   <td>{item.email}</td>
   <td>{item.createdAt}</td>
 </tr>
        ))}
</tbody>
      </table>
    </div>
    )
}