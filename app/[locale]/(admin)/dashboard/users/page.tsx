import styles from "@/app/ui/dashboard/users/users.module.css";
import React, { useState } from "react";
import UsersList from "./components/usersList";

const UsersPage = async ({ searchParams }) => {

  return (
    <div className={styles.container}>
     
      <UsersList />
    </div>
    
  );
};

export default UsersPage;
