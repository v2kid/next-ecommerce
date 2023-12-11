import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import React from "react";
import ProductList from "./components/productlist";

const ProductsPage = async ({ searchParams }) => {
  
  return (

    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <ProductList />
      
    </div>
  );
};

export default ProductsPage;
