import Sidebar from "@/app/ui/dashboard/sidebar/sidebar";
import styles from "@/app/ui/dashboard/dashboard.module.css"
import '@/app/ui/globals.css'
import React from "react"
import Navbar from "@/app/ui/dashboard/navbar/navbar";
import Footer from "@/app/ui/dashboard/footer/footer";
const Layout = ({ params: { locale }, children }: { params: { locale: string }; children: React.ReactNode }) => {
  return (
<section>
    <div className={styles.container}>
    <div className={styles.menu}>
     <Sidebar/>
   </div>
   <div className={styles.content}>
     <Navbar/>
     {children}
     <Footer/>
   </div>
 </div>
  
 </section>

   
  )
}

export default Layout