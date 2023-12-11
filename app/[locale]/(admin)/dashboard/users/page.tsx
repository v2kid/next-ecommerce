import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import React, { useState } from "react";
import Search from "@/app/ui/dashboard/search/search";
import UsersList from "./components/usersList";
import { Container } from "@mui/material";
import ProductList from "../products/components/productlist";

const UsersPage = async ({ searchParams }) => {

  return (
    <div className={styles.container}>
     
      <UsersList />
    </div>
    
  );
};

export default UsersPage;
